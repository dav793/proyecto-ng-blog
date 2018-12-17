import { Component } from '@angular/core';

import { DataService } from './data.service';

import { User } from './user/user.model';

import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLoggedIn = false;

  constructor(
    private dataService: DataService
  ) {}

  goToPosts() {
    console.log('navigate to posts');
  }

  goToProfile() {
    console.log('navigate to profile');
  }

  goToLogIn() {
    console.log('navigate to log in');
    this.isLoggedIn = true;
  }

  logOut() {
    console.log('logging out...');
    this.isLoggedIn = false;
  }

  get loggedUser(): User|null {
    if (this.isLoggedIn)
      return new User({
        id: '1',
        username: 'pepito',
        fullName: 'Pepito Apellido'
      });
    else
      return null;
  }

}
