
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPostComponent } from './post/listado-post/listado-post.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'posts', children: [
      { path: 'list', component: ListadoPostComponent },
      { path: '', pathMatch: 'full', redirectTo: 'list' }
  ]},
  {
    path: 'users', children: [
      { path: 'create', component: UserFormComponent },
      { path: 'edit', component: UserFormComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
