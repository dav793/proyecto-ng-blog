import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltradoService {

  constructor() { }

  // getPostByTag(search: string, postArr: Post[]) {
  //   return Observable.create((observador) => {
  //     setTimeout(() => {
  //       for (let post of postArr) {
  //         if (post.tags.indexOf(search) !== -1) {
  //           observador.next(post);
  //         }
  //       }
  //     }, 4000);
  //   });
  // }

  getPostByTag(search: string, postArr: Post[]) {
    return Observable.create((observador) => {
      for (let post of postArr) {
        if (post.tags.indexOf(search) !== -1) {
          observador.next(post);
        }
      }
    });
  }
}