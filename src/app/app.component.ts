import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from './data.service';
import { UserService } from './user/user.service';

import { User } from '../app/user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private dataService: DataService,
    private userService: UserService,
    private router: Router
  ) {
    this.userService.setLoggedInUserFromStorage();
  }

  goToPosts() {
    console.log('navigate to posts');
  }

  goToProfile() {
    console.log('navigate to profile');
  }

  goToLogIn() {
    console.log('navigate to log in');
  }

  goToUserRegister() {
    this.router.navigate(['users', 'create']);
  }

  logOut() {
    console.log('logging out...');
    // tslint:disable-next-line:no-unused-expression
    this.userService.logOut();
  }

  setUserOnNav(): User | null {
    return this.userService.loggedInUser;
  }

}
