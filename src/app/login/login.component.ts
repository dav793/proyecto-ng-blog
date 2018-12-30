import { Component, OnInit } from '@angular/core';

import { UserService } from '../user/user.service';
import { User } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = {
    username: '',
    password: ''
  };

  showLogInError = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  logIn() {
    this.userService.logInUser(this.loginModel.username, this.loginModel.password)
      .subscribe((user: User|null) => {

        if (user)
          this.showLogInError = false;
        else
          this.showLogInError = true;

      });
  }

}