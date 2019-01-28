import { Injectable } from '@angular/core';
import { Post } from '../post.model';
import { Observable, from } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FiltradoService {

  constructor() { }

  // The following are the only attributes in which we can filter the posts
  getFilterOptionsFromPost() {
    // This are the only parameters that all post can be filter by.
    return ['numRaters','date','author','numVisits','tags'];
  }

  getSpecificFilters(filter: string, postArr: any) {  
    // Arreglo de los posibles valores para el segundo filtro acorde al primer filtro
    let arr = [];
    return Observable.create((observador) => {
      for (let post of postArr) { // Iteration over all the posts
        if (post.hasOwnProperty(filter)) { // The post has the property with a value
          if (Array.isArray(post[filter])) { // If the property is an array
            for (let eachElement of post[filter]) {
              if (arr.indexOf(eachElement) === -1) {
                arr.push(eachElement);
              }
            }
          } else {
            if(arr.indexOf(post[filter]) === -1) {
              arr.push(post[filter]);
            }
          }
        }
      }
      observador.next(arr);
      setTimeout(() => { observador.complete() }, 1000);
      // observador.complete();
    });
  }

  // This is the method that returns all the objects that have the specied elements
  getSpecificElements(key: string, value: string, objects: any) {
    // console.log(key, value, ' ----> ', objects);
    let results: Post[] = [];
    for (let obj of objects) {
      // console.log(obj[key], ' === ', value);
      if (obj[key] == value) {
        results.push(obj);
      }
    }
    // console.log(results);
    return results;
  }
}