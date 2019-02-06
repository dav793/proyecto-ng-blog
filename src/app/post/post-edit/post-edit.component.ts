import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Post, PostFactory } from '../post.model';

import * as moment from 'moment';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  // postId: string;
  post: Post;
 
  postForm: FormGroup;

  pageTitle = 'Create/Edit View';
  preview: boolean;
  
  actualDate = moment().format('D/MM/YYYY');
  tagOptions = Post.postTags;

  model: Post = PostFactory.CreateDefault();

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]], 
      date: {value: this.actualDate, disabled: true},
      tags: false,
      body: [this.model.body, []]
    });
  }

  setPreview() {
    this.preview = !this.preview;
  }
  
}
