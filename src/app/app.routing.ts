
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostViewComponent } from './post/post-view/post-view.component';

const routes: Routes = [
  // { path: 'posts', children: [
  //     { path: 'edit/:id', component: PostViewComponent }
  //     // { path: 'list', component: UserListComponent, canActivate: [AuthGuardService] },
  //     // { path: '', pathMatch: 'full', redirectTo: 'list' }
  // ]},
  { path: 'posts', component: PostViewComponent },
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
