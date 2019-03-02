import { Component, OnInit } from '@angular/core';

import { UserService } from '../user.service';

import { User } from '../user.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  model: User;
  userExists: boolean;
  pageTitle: string;
  titleForLogged: 'Your Profile';

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  getUserInfo(userName: string) {
    userName = 'PeNa';
    if (this.userService.findUserByUsername(userName)){
      this.model = this.userService.findUserByUsername(userName);
      this.userExists = true;
    }else{
      this.userExists = false;
    }
    
    
  }




}
