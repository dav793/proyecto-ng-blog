import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostFilterService {

  constructor() { }

  // The following are the only attributes in which we can filter the posts
  getFilterOptionsFromPost() {
    // This are the only parameters that all post can be filter by.
    return ['numRaters', 'date', 'author', 'numVisits', 'tags'];
  }

  getSpecificFilters(filter: string, postArr: any) {  
    // Arreglo de los posibles valores para el segundo filtro acorde al primer filtro
    let arr = [];
    return Observable.create((observador) => {
      for (let post of postArr) {
        if (post.hasOwnProperty(filter)) {
          if (Array.isArray(post[filter])) {
            for (let eachElement of post[filter]) {
              if (arr.indexOf(eachElement) === -1) {
                arr.push(eachElement);
              }
            }
          } else {
            if (arr.indexOf(post[filter]) === -1) {
              arr.push(post[filter]);
            }
          }
        }
      }
      observador.next(arr);
      observador.complete();
    });
  }

  // This is the method that returns all the objects that have the specied elements
  getSpecificElements(key: string, value: string, objects: any) {
    let results: Post[] = [];
    for (let obj of objects) {
      if (Array.isArray(obj[key])) {
        for (let elem of obj[key]) {
          if (elem == value) {    // == es necesario
            results.push(obj);
            break; // This avoids to add an element to the result more than once
          }
        }
      } else {
        if (obj[key] == value) {  // == es necesario
          results.push(obj);
        }
      }
    }
    return results;
  }
}
