import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { DataService } from '../../data.service';
import { FiltradoService } from '../services/filtrado.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { CompileTemplateMetadata, templateJitUrl } from '@angular/compiler';

@Component({
  selector: 'app-listado-post',
  templateUrl: './listado-post.component.html',
  styleUrls: ['./listado-post.component.css']
})
export class ListadoPostComponent implements OnInit {
  allPost: Post[] = [];
  tempPost: Post[] = [];
  allTags: string[] = [];

  searchForm = this.formBuilder.group({
    search: ['', Validators.required]
  });

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private postFilterService: FiltradoService) { }

  ngOnInit() {
    this.allPost = this.dataService.findAll('posts');
    this.fillAllTags();
    // Crear servicio de filtrado por medio de los parametros, y hacerle un interface al filtrado al parametro del filtrado
    // this.allTags = this.filterServiceByTags({tags: 'perros'});
  }

  fillAllTags() {
    for (let post of this.allPost) {
      for (let tag of post.tags) {
        if (this.allTags.indexOf(tag) === -1) {
          this.allTags.push(tag);
        }
      }
    }
  }

  onSubmit() {
    // console.log(this.searchForm.controls['search'].value);
    this.tempPost = [];
    if (this.searchForm.controls['search'].value.toString() === 'AllTags') {
      this.tempPost = this.allPost;
    } else {
      this.postFilterService.getPostByTag(this.searchForm.controls['search'].value.toString(), this.allPost).subscribe(
        result => {
          this.tempPost.push(result);
        }
      );
    }

    // for (let post of this.tempPost) {
    //   console.log(post.title);
    // }
  }
}
