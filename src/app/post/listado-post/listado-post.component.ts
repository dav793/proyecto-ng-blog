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
  }

  updateSecondFilter() {
    this.postFilterSpecificSearchs = [];
    if (this.searchForm.controls['property'].value !== '') {
      this.postFilterService.getSpecificFilters(this.searchForm.controls['property'].value, this.allPost).subscribe(
        results => {
          let arr: string[] = results;
          for (let data of arr) {
            if (this.postFilterSpecificSearchs.indexOf(data) === -1) {
              this.postFilterSpecificSearchs.push(data);
            }
          }
        }
      );
      this.secondFilter = true;
    } else {
      this.secondFilter = false;
    }
  }

  onSubmit() {
    this.tempPost = [];
    if(this.searchForm.controls['search'].value === '') {
      this.tempPost = this.allPost;
    } else {
      this.tempPost = this.postFilterService.getSpecificElements(this.searchForm.controls['property'].value, this.searchForm.controls['search'].value, this.allPost);
    }
    // console.log(this.tempPost);
  }
}
