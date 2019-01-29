import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PostService } from '../post.service';
import { Post, PostFactory } from '../post.model';

import * as moment from 'moment';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postId: string;
  post: Post;
 
  postForm: FormGroup;
  quillForm: FormGroup;

  pageTitle:string = 'Create/Edit View';
  state: 'view'|'edit' = 'edit';
  
  actualDate = moment().format('D/MM/YYYY');
  tagOptions = Post.postTags;

  model: Post = PostFactory.CreateDefault();

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.postForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3)]], 
      date: {value: this.actualDate, disabled: true},
      tags: false
    })

    this.quillForm = this.formBuilder.group({
      body: [this.model.body, []]
    })
  }

  setState(newState: 'view'|'edit') {
    this.state = newState;
  }
}
