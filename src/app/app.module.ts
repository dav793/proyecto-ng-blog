import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PostModule } from './post/post.module';
import { UserModule } from './user/user.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

import { appRoutes } from './app-routing.module';
import { DataService } from './data.service';


import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent
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
    UserModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
