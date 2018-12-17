import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { User } from '../user/user.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() loggedUser: User;
  @Output() clickedPosts = new EventEmitter();
  @Output() clickedProfile = new EventEmitter();
  @Output() clickedLogIn = new EventEmitter();
  @Output() clickedLogOut = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  emitPostsClick() {
    this.clickedPosts.emit();
  }

  emitProfileClick() {
    this.clickedProfile.emit();
  }

  emitLogInClick() {
    this.clickedLogIn.emit();
  }

  emitLogOutClick() {
    this.clickedLogOut.emit();
  }

  get userIsLogged(): boolean {
    return this.loggedUser ? true : false;
  }

  get loggedUserName(): string {
    if (!this.userIsLogged)
      return null;

    return this.loggedUser.fullName;
  }

}
