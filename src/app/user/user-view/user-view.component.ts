import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

import { MatChipInputEvent } from '@angular/material';

import { UserService } from '../user.service';

import { User } from '../user.model';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  form: FormGroup;
  model: User;
  userId: string;
  userExists: boolean;
  isLoggedUser: boolean;
  pageTitle: string;
  titleForLogged: 'Your Profile';
  postsToShow = [];
  interest = [];

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getUserToShow();
    this.form = this.createFormWithBuilder(this.model);
  }

  compareId() {
    if (this.userId === this.userService.loggedInUser.id) {
      this.isLoggedUser = true;
    } else {
      this.isLoggedUser = false;
    }
  }

  getUserToShow() {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userService.findUserById(this.userId)) {
      let userToShow = this.userService.findUserById(this.userId);
      this.model = new User(userToShow);
      this.postsToShow = this.userService.getPostsFromUser(this.userId);
      this.interest = this.model.interests;
      this.userExists = true;
    } else {
      this.userExists = false;
    }
    if (this.userService.loggedInUser) {
      this.compareId();
    }
  }

  createFormWithBuilder(model: User): FormGroup {
    const group = this.formBuilder.group({
      username: [model.username, []],
      fullName: [model.fullName, []],
      email: [model.email, []],
      birthDate: [model.birthDate, []],
      pathImg: [model.pathImg, []],
      interests: [model.interests, []]
    });
    return group;
  }

}

