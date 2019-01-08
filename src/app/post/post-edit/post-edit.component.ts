import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, FormArray } from '@angular/forms';

import { PostService } from '../post.service';
import { Post, Comment } from '../post.model';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postId: string;
  post: Post;
  postForm: FormGroup;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    this.route.params
      .subscribe((params: any) => {
        this.postId = params.id;
        this.init();
      });

  }

  init() {

    this.postService.getPost(this.postId).subscribe(
      (post: Post) => {
        this.post = post;
        this.postForm = this.createForm(this.post);
      }
    );

  }

  createForm(model: Post): FormGroup {

    const commentsGroups = this.setComments(model.comments);

    const group = this.formBuilder.group({
      title:              [ model.title,                          [] ],
      author:             [ model.author,                         [] ],
      date:               [ model.date,                           [] ],
      body:               [ model.body,                           [] ],
      tags:               [ model.tags,                           [] ],
      pathImg:            [ model.pathImg,                        [] ],
      comments:           this.formBuilder.array(commentsGroups)
    });

    return group;
  }

  get comments() {
    return this.postForm.get('comments') as FormArray;
  }

  setComments(comments: Comment[]) {
    const commentsGroups = comments.map((comment: Comment) => {
      return this.formBuilder.group({
        author:     [ comment.author,    [] ],
        body:       [ comment.body,      [] ],
        date:       [ comment.date,      [] ]
      });
    });
    return commentsGroups;
  }

  addComments() {
    const comments = new Comment({});
    this.comments.push(this.formBuilder.group({
      author:     [ comments.author,    [] ],
      body:       [ comments.body,      [] ],
      date:       [ comments.date,         [] ]
    }));
    this.postForm.markAsDirty();
  }

  removeComments(index: number) {
    const commentsCopy: Comment[] = Object.assign([], this.postForm.value.addresses);
    commentsCopy.splice(index, 1);

    const commentsGroups = this.setComments(commentsCopy);
    const commentsFormArray = this.formBuilder.array(commentsGroups);

    this.postForm.setControl('comments', commentsFormArray);
    this.postForm.markAsDirty();
  }

}
