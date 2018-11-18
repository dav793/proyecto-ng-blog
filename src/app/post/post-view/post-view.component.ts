import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

import { DataService } from '../../data.service';
import { Post, Comment, PostFactory } from '../post.model';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  model: Post = PostFactory.CreateDefault();

  form: FormGroup;

  state: 'view'|'edit' = 'edit';

  constructor(
    private dataService: DataService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {

    this.form = this.createForm(this.model);

  }

  createForm(model: Post): FormGroup {

    const group = this.fb.group({
      body:             [ model.body,             [] ]
    });

    return group;

  }

  setState(newState: 'view'|'edit') {
    this.state = newState;
  }

}
