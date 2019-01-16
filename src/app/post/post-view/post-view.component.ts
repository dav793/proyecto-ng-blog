import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

import { PostFilterService } from '../post.filters.service';
import { DataService } from '../../data.service';
import { Post, Comment } from '../post.model';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  constructor(
    private postFilterService: PostFilterService,
    private dataService: DataService
  ) {}

  ngOnInit() {

    let posts = this.dataService.findAll('posts');

    this.postFilterService.getAllPropertyValues(posts)
      .subscribe(propertyValues => console.log(propertyValues));

    // this.postFilterService.getDistinctPropertyValues('date', posts)
    //   .subscribe(uniqueValues => console.log(uniqueValues));

  }

  onDateSelect(date) {
    console.log(date);
  }

}
