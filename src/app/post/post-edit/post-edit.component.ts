import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { PostService } from '../post.service';
import { Post, Comment } from '../post.model';

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
  pageTitle:string = 'Create/Edit View';
  
  actualDate = moment().format('D/MM/YYYY');
  tagOptions = Post.postTags;

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
  }


}
