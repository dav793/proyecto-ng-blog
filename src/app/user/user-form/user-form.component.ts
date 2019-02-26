import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material';

import { UserService } from '../user.service';
import { UserNameValidator } from '../user-form/user-name.validator';

import { User } from '../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})

export class UserFormComponent implements OnInit {
  
  // la idea es poder interpolarlos en el template dependiendo si queremos editar o crear un usuario :v
  pageTitleCreateUser = 'Create User';
  pageTitleEditUser = 'Edit User';
  pageTitle: string;
  form: FormGroup;
  interestsForm: FormGroup;
  isLogged = false;
  model: User;

  interests = [];

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    if (this.userService.loggedInUser) {
      // tslint:disable-next-line:no-unused-expression
      this.isLogged = true;
    } else { 
      // tslint:disable-next-line:no-unused-expression
      this.isLogged = false;
    }
    this.checkLoggedUser();
    this.form = this.createFormWithBuilder(this.model);
    this.interests = this.model.interests;
    this.interestsForm = this.createInterestsForm(this.interests);
  }
  
  createFormWithBuilder(model: User): FormGroup {
    const group = this.formBuilder.group({
      username:       [model.username, [Validators.required], [UserNameValidator.createValidator(this.userService)]],
      fullName:       [model.fullName, [Validators.required]],
      email:          [model.email, [Validators.email]],
      birthDate:      [model.birthDate, []],
      pathImg:        [model.pathImg, []],
      interests:      [model.interests, []]
    });
    return group;
  }

  createInterestsForm(interests: string[]): FormGroup {
    let interestsObj = {};
    interests.forEach(interest => {
      interestsObj[interest] = [false, []];
    });

    const group = this.formBuilder.group(interestsObj);
    this.watchInterestsForm(group);
    return group;
  }

  watchInterestsForm(group: FormGroup) {
    let interests = Object.keys(group.controls);

    interests.forEach(interest => {
      group.get(interest).valueChanges.subscribe(change => {

        if (change === true) {    // agregar a intereses
          let selectedInterests = this.selectedInterests;
          if (selectedInterests.indexOf(interest) === -1) {   // no existe interest en elemento del form
            selectedInterests.push(interest);
            this.form.get('interests').setValue(selectedInterests);
          }
        }
        else {                    // remover de intereses

          let selectedInterests = this.selectedInterests;
          let interestIndex = selectedInterests.indexOf(interest);
          if (interestIndex !== -1) {   // existe interest en elemento del form
            selectedInterests.splice(interestIndex, 0); // se le cambió 1 por 0 para que mantenga los check boxes en el form
            this.form.get('interests').setValue(selectedInterests);
          }

        }
      });
    });
  }

  get selectedInterests(): string[] {
    if (!this.form)
      return null;
    return this.form.get('interests').value;
  }

  get userNameValidatorErrors() {
    if (!this.form)
      return null;
     
      if (this.form.get('username').errors && this.form.get('username').errors.hasOwnProperty('userNameAvailable')){
        return this.form.get('username').errors.userNameAvailable;
     }
  }

  checkLoggedUser() {
    if (this.isLogged) { // usuario logueado
      this.model = this.userService.loggedInUser;
      this.pageTitle = this.pageTitleEditUser;
    } else { // usuario no logueado
      this.model = new User({});
      this.pageTitle = this.pageTitleCreateUser;
    }
  }

  onSubmit() {
    const changesInUser = new User(this.form.value);
    changesInUser.id = this.model.id; // como el form saca info del id, esta debe agregarse
    if (this.isLogged) { // usuario logueado
      this.model = this.userService.editLoggedUser(changesInUser);
    } else { // usuario no logueado
      this.model = this.userService.createNewUser(changesInUser);
    }
    this.form = this.createFormWithBuilder(this.model);
    this.interests = this.model.interests;
    this.interestsForm = this.createInterestsForm(this.interests);
  }
  
}
