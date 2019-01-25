import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FiltradoService {

  constructor() { }

  getFilterOptionsFromPost() {
    // return from(['ranking','date','author','numVisits','tags ']);
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
          if (Array.isArray(post[filter])) {
            // console.log('Working with arrays');
            for (let eachElement of post[filter]) {
              if (arr.indexOf(eachElement) === -1) {
                arr.push(eachElement);
              }
            }
          } else {
            arr.push(post[filter]);
          }
        }
      }
      observador.next(arr);
      observador.complete();
    });
  }

  getSpecificElements(key: string, value: string, objects: any) {
    console.log(key, value, ' ----> ', objects);
    let results: Post[] = [];
    for (let obj of objects) {
      // console.log(obj[key], ' === ', value);
      if (obj[key] == value) {
        results.push(obj);
      }
    }
    // console.log(results);
    return results;
    
    // let results: any;
    // for (let data of arr) {
    //   if(data[key].toString === value) {
    //     results.push(data);
    //     console.log('Hello');
    //   }
    // }
    // return results;



    // return Observable.create((observador) => {
    //   for (let obj of arr) {
    //     console.log(obj[key]);
    //     if (obj[key] === value) {
    //       observador.next(obj);
    //       console.log(obj);
    //     }
    //   }
    //   observador.complete();
    // });
  }
}