import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { AppRoutingModule } from './app.routing';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

import { MaterialPackageModule } from './material-package/material-package.module';

import { DataService } from './data.service';
import { UserService } from './user/user.service';


import { NavComponent } from './nav/nav.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    AppRoutingModule,
    PostModule,
    MaterialPackageModule,
    UserModule
  ],
  providers: [
    DataService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
