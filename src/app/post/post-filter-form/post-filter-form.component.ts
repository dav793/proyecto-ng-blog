import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PostFilterService } from '../services/postFilter.service';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';
import { Post } from '../post.model';

@Component({
  selector: 'app-post-filter-form',
  templateUrl: './post-filter-form.component.html',
  styleUrls: ['./post-filter-form.component.css']
})
export class PostFilterFormComponent implements OnInit {

  postForm: FormGroup;

  firstFilter = false;
  secondFilter = false;
  
  firstFilterOptions: string[] = [];
  secondFilterOptions: string[] = [];

  subscription: Subscription;

  @Output() finalPostEvent: EventEmitter<Post[]> = new EventEmitter();
  @Output() showList: EventEmitter<boolean> = new EventEmitter();

  finalPost: Post[] = [];
  tempPosts: Post[] = [];

  constructor(private fb: FormBuilder, 
    private postFilterService: PostFilterService, 
    private dataService: DataService) {
    this.postForm = fb.group({
      postAttribute: ['', Validators.required],
      postAttributeValue: ['', Validators.required]
    });
  }

  ngOnInit() {
    // Ading the first filter options
    this.firstFilterOptions = this.postFilterService.getFilterOptionsFromPost();
    this.tempPosts = this.dataService.findAll('posts');
    this.firstFilter = true;
  }

  updateSecondFilter(data: any) {
    this.secondFilterOptions = [];
    this.showList.emit(false);
    if(this.postForm.get('postAttribute').value == '') {
      this.secondFilter = false;
      this.postForm.get('postAttributeValue').setValue('');
    } else {
      if(this.postForm.get('postAttribute').value == 'all') {
        this.postForm.get('postAttributeValue').setValue('all');
        this.secondFilter = false;
      } else {
        this.postForm.get('postAttributeValue').setValue('');
        this.postFilterService.getSpecificFilters(this.postForm.get('postAttribute').value, this.tempPosts).subscribe(
          filterOptions => { 
            this.secondFilter = false;
            this.secondFilterOptions = filterOptions;
          },
          error => { 
            console.log('Error: ' + error) 
          },
          _ => { 
            this.secondFilter = true;
          }
        );
      }
    }
  }

  onSubmit() {
    if(this.postForm.get('postAttribute').value != "all") {
      this.finalPost = this.postFilterService. getSpecificElements(
        this.postForm.get('postAttribute').value, 
        this.postForm.get('postAttributeValue').value, 
        this.tempPosts
      );
    } else {
      this.finalPost = this.tempPosts;
    }
    this.finalPostEvent.emit(this.finalPost);
  }
}
