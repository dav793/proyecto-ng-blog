import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  // Post without changes
  post: Post;

  // Post with changes
  edited_post: Post;

  constructor(private route: Router, private dataService: DataService) {}

  ngOnInit() {
    // this.post = this.dataService.findById('posts', this.route.snapshot.params['id']);
  }
}
