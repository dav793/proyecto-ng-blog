import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../user.service';

import { User } from '../user.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  model: User;
  userId: string;
  userExists: boolean;
  pageTitle: string;
  titleForLogged: 'Your Profile';

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  getUserInfo(userName: string) {
    userName = 'PeNa';
    if (this.userService.findUserByUsername(userName)){
      this.model = this.userService.findUserByUsername(userName);
      this.userExists = true;
      this.userId = this.model.id;
    }else{
      this.userExists = false;
    }
    
  }




}
