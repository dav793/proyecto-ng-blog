import { Component } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-listado-post',
  templateUrl: './listado-post.component.html',
  styleUrls: ['./listado-post.component.css']
})
export class ListadoPostComponent {
  finalPosts: Post[] = [];
  showList = false;

  workFilteredList(data: any) {
    this.finalPosts = data;
    this.showList = true;
  }

  showResults(data: any) {
    this.showList = data;
  }
}
