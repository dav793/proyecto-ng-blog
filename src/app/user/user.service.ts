import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { DataService } from '../data.service';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _loggedInUser: User;

  constructor(private dataService: DataService) { }

  get loggedInUser() {
    return this._loggedInUser;
  }
  
  setLoggedInUserFromStorage() {
    let user = localStorage.getItem('loggedUser');
    if (user){
      this._loggedInUser = JSON.parse(user);
    }
  }

  logInUser(username: string, password: string): Observable<User|null> {
    return new Observable(observer => {

      let user = this.findUserByUsername(username);

      if (user) { // log in usuario existente
        this._loggedInUser = user;
        observer.next(this._loggedInUser);
      } else        // usuario no existente
        observer.next(null);

      observer.complete();
    });
  }

  logOut() {
    this._loggedInUser = null;
    localStorage.removeItem('loggedUser');
  }

  /**
   * find the user with username given by <username>
   *
   * @param username
   * @return User|null
   */
  findUserByUsername(username: string): User|null {
    let users = this.dataService.findAll('users');
    let user = users.find(u => u.username === username);

    if (user)
      return user;
    return null;
  }

  checkUserNameAvailable(username: string): Observable<boolean> {
    return new Observable<boolean>(observer => {
        if (this.findUserByUsername(username) && this._loggedInUser.username !== username)
          observer.next(true);
        else
          observer.next(false);
        observer.complete();
    });
  }

  editLoggedUser(userForEdit: any): any {
    localStorage.setItem('loggedUser', JSON.stringify(userForEdit));
    return this.dataService.updateById('users', userForEdit.id, userForEdit);
  }
  createNewUser(newUser: any): any {
    this._loggedInUser = newUser;
    localStorage.setItem('loggedUser', JSON.stringify(newUser));
    return this.dataService.create('users', newUser);
  }

}
