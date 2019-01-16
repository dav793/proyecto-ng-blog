import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';

import { Post } from './post.model';
import { postFilters } from './post.filters';

@Injectable({
  providedIn: 'root'
})
export class PostFilterService {

  constructor() {}

  getAllPropertyValues(posts: Post[]): Observable<{[key: string]: any[]}> {
    return new Observable(observer => {

      forkJoin( postFilters.map(propertyName => this.getDistinctPropertyValues(propertyName, posts)) )
        .subscribe(propertyValues => {

          let result = {};
          postFilters.forEach((propertyName, index) => {
            result[propertyName] = propertyValues[index];
          });

          observer.next(result);
          observer.complete();

        });

    });
  }

  getDistinctPropertyValues(propertyName: string, posts: Post[]): Observable<any[]> {
    return new Observable(observer => {

      // extraer los valores de cada post
      let allPropertyValues = posts.map(post => post[propertyName]);
      let result = [];

      // compilar los resultados de cada post en un unico arreglo
      allPropertyValues.forEach( propertyValues => {
        result = result.concat(propertyValues);
      });

      // remover duplicados
      result = result.filter((item, pos) => {
        return result.indexOf(item) == pos;
      });

      observer.next(result);
      observer.complete();

    });
  }

}
