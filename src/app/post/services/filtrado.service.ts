import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { Observable } from 'rxjs';

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

  getFilterOptionsFromPost() {
    return Observable.create((observador) => {
      observador.next('ranking');
      observador.next('date');
      observador.next('author');
      observador.next('numVisits');
      observador.next('tags');
      observador.complete();
    });
  }

  getSpecificFilters(filter: string, postArr: any) {
    let arr = [];
    return Observable.create((observador) => {
      for (let post of postArr) { 
        if (post.hasOwnProperty(filter)) {
          // console.log('Filter: ', filter, ' -- post[filter]: ', post[filter]);
          
          
          arr.push(post[filter]);
        }
      }
      observador.next(arr);
      observador.complete();
    });

    // console.log(filter);
    // for (let post of postArr) {
    //   for (let key in post) {
    //     if (post.hasOwnProperty(key) && key === filter) {
    //       console.log(key + ' -> ' + post[key]);
    //     }
    //   }
    // }
  }

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