import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { appRoutes } from './app-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { PostModule } from './post/post.module';

import { MaterialPackageModule } from './material-package/material-package.module';

import { DataService } from './data.service';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';

import { QuillModule } from 'ngx-quill';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    PostModule,
    QuillModule,
    MaterialPackageModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
