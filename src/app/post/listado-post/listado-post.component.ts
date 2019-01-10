import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-listado-post',
  templateUrl: './listado-post.component.html',
  styleUrls: ['./listado-post.component.css']
})
export class ListadoPostComponent implements OnInit {
  allPost: Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.allPost = this.dataService.findAll('posts');
  }
}
