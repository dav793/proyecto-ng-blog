import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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
  }

  logOut() {
    console.log('logging out...');
  }

}
