import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

import { DataService } from '../data.service';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private dataService: DataService) {}

  getPost(id: string): Observable<Post> {
    return new Observable(observer => {
      let post = this.dataService.findById('posts', id);
      observer.next(post);
      observer.complete();
    });
  }

}
