import { Component, OnInit, OnChanges } from '@angular/core';
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
  isLoggedUser: boolean;
  pageTitle: string;
  titleForLogged: 'Your Profile';

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userService.findUserById(this.userId)) {
      let userToShow = this.userService.findUserById(this.userId);
      this.model = new User(userToShow);
      this.userExists = true;
    } else {
      this.userExists = false;
    }
    if (this.userService.loggedInUser) {
      this.compareId();
    }
  }

  compareId() {
    if (this.userId === this.userService.loggedInUser.id) {
      this.isLoggedUser = true;
    } else {
      this.isLoggedUser = false;
    }
  }

  // refresh() {
  //   this.router.navigate(['/users/profile', this.userId]);
  // }

}

