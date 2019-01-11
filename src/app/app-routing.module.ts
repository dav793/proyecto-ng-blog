import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPostComponent } from './post/listado-post/listado-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';

export const appRoutes: Routes = [
  { path: 'post-list', component: ListadoPostComponent },
  { path: 'post/:id', component: EditPostComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
