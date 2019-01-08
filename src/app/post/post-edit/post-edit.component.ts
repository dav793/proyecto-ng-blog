import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostService } from '../post.service';
import { Post } from '../post.model';


@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {

  postId: string;
  post: Post;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
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
      }
    );

  }

}
