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

  model: Post = new Post({
    title: 'Un titulo'
  });

  constructor(private dataService: DataService) {

    this.model = this.dataService.findById('posts', '353690247');

  }

  ngOnInit() {
    // console.log(quill);
  }

  onSubmit(form: FormGroup) {

    this.dataService.updateById('posts', '353690247', form.value);

  }

}
