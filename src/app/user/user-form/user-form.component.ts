import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

import { UserService } from '../user.service';
import { UserNameValidator } from '../user-form/user-name.validator';

import { MatAutocompleteSelectedEvent, MatChipInputEvent, MatAutocomplete } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

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
  allInterests = ['holaMundo', 'typeScript', 'logoWR'];

  // propiedades para el chiplist
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  interestCtrl = new FormControl;
  filteredInterests: Observable<string[]>;

  @ViewChild('interestInput') interestInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
    this.filteredInterests = this.interestCtrl.valueChanges.pipe(
      startWith(null),
      map((interest: string | null) => interest ? this._filter(interest) : this.allInterests.slice()));
  }

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
    // this.interestsForm = this.createInterestsForm(this.interests);
  }

  createFormWithBuilder(model: User): FormGroup {
    const group = this.formBuilder.group({
      username: [model.username, [Validators.required], [UserNameValidator.createValidator(this.userService)]],
      fullName: [model.fullName, [Validators.required]],
      email: [model.email, [Validators.email]],
      birthDate: [model.birthDate, []],
      pathImg: [model.pathImg, []],
      interests: [model.interests, []]
    });
    return group;
  }

  add(event: MatChipInputEvent): void {

    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Add our interest
      if ((value || '').trim()) {
        this.interests.push(value.trim());
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }
      this.interestCtrl.setValue(null);
    }
  }

  remove(interest: string): void {
    const index = this.interests.indexOf(interest);

    if (index >= 0) {
      this.interests.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.interests.push(event.option.viewValue);
    this.interestInput.nativeElement.value = '';
    this.interestCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allInterests.filter(interest => interest.toLowerCase().indexOf(filterValue) === 0);
  }
  get userNameValidatorErrors() {
    if (!this.form)
      return null;

    if (this.form.get('username').errors && this.form.get('username').errors.hasOwnProperty('userNameAvailable')) {
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
  }

}
