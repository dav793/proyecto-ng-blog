import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { DataService } from '../../data.service';
import { FiltradoService } from '../services/filtrado.service';
import { Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listado-post',
  templateUrl: './listado-post.component.html',
  styleUrls: ['./listado-post.component.css']
})
export class ListadoPostComponent implements OnInit {
  allPost: Post[] = [];
  tempPost: Post[] = [];
  postFilterOptions: string[] = [];
  postFilterSpecificSearchs: string[] = [];
  secondFilter = false;

  searchForm = this.formBuilder.group({
    property: ['', Validators.required],
    search: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private postFilterService: FiltradoService) { }

  ngOnInit() {
    this.allPost = this.dataService.findAll('posts');
    this.postFilterOptions = this.postFilterService.getFilterOptionsFromPost();
  }

  updateSecondFilter() {
    // console.log(this.searchForm.controls['property'].value);
    this.postFilterSpecificSearchs = [];
    if (this.searchForm.controls['property'].value !== '') {
      this.postFilterService.getSpecificFilters(this.searchForm.controls['property'].value, this.allPost).subscribe(
        results => {
          // this.postFilterSpecificSearchs.push(results);
          console.log(results);
        }
      );
      this.secondFilter = true;
      // console.log(this.postFilterSpecificSearchs);
    } else {
      this.secondFilter = false;
    }
  }

  // fillAllTags() {
  //   for (let post of this.allPost) {
  //     for (let tag of post.tags) {
  //       if (this.postFilterSpecificSearchs.indexOf(tag) === -1) {
  //         this.postFilterSpecificSearchs.push(tag);
  //       }
  //     }
  //   }
  // }

  onSubmit() {
    // console.log(this.searchForm.controls['search'].value);
    // this.tempPost = [];
    // if (this.searchForm.controls['search'].value.toString() === 'AllTags') {
    //   this.tempPost = this.allPost;
    // } else {
    //   this.postFilterService.getPostByTag(this.searchForm.controls['search'].value.toString(), this.allPost).subscribe(
    //     result => {
    //       this.tempPost.push(result);
    //     }
    //   );
    // }

    // for (let post of this.tempPost) {
    //   console.log(post.title);
    // }
  }
}
