import { Component, OnInit } from '@angular/core';
import {FormGroup} from '@angular/forms';

import { DataService } from '../../data.service';
import { Post, Comment } from '../post.model';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.css']
})
export class PostViewComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  onDateSelect(date) {
    console.log(date);
  }

}
