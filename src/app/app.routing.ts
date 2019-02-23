
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPostComponent } from './post/listado-post/listado-post.component';

const routes: Routes = [
  { path: 'posts', children: [
      { path: 'list', component: ListadoPostComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' }
  ]},
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: '**', pathMatch: 'full', redirectTo: 'posts/list' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
