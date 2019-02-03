import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';

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
  // interestsForm: FormGroup;
  isLogged = false;
  model: User;
  constructor(private userService: UserService, private formBuilder: FormBuilder) { }
 
  ngOnInit() {
    if (this.userService.loggedInUser) {
      // tslint:disable-next-line:no-unused-expression
      this.isLogged === true;
    } else { 
      // tslint:disable-next-line:no-unused-expression
      this.isLogged === false;
    }
    this.checkLoggedUser();
    this.form = this.createFormWithBuilder(this.model);
    // const interestsFormControls = this.model.interests.map(control => new FormControl(false));
    // this.interestsForm = this.formBuilder.group(this.model.interests: new FormArray(interestsFormControls));

    // console.log(this.model.interests);
  }
  
  createFormWithBuilder(model: User): FormGroup {
    const group = this.formBuilder.group({
      username:       [model.username, [Validators.required], [UserNameValidator.createValidator(this.userService)]],
      fullName:       [model.fullName, [Validators.required]],
      email:          [model.email, [Validators.email]],
      birthDate:      [model.birthDate, []],
      pathImg:        [model.pathImg, []],
      interests:      this.formBuilder.array(model.interests)
    });
    return group;
  }

  checkLoggedUser() {
    // this.isLogged = true; /////////////////
    if (this.isLogged) {
      // usuario Logueado

      this.model = new User({  // para pruebas únicamente
        id: '152390144',
        username: 'hola',
        fullName: 'Pedro Navarrete',
        birthDate: 408434400000,
        email: 'pedro@navarrete.com',
        pathImg: 'https://img.peru21.pe/files/ec_article_multimedia_gallery/uploads/2018/09/25/5baa6d8f3a080.jpeg',
        interests: ['java', 'angular', 'c++', 'python']
      });
      // this.model = this.userService.loggedInUser; // la línea que queda
      this.pageTitle = this.pageTitleEditUser;
      
    } else {
      // usuario no logueado
      this.model = new User({});
      this.pageTitle = this.pageTitleCreateUser;
    }
  }


}