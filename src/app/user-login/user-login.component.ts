import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

// import { ReactiveFormDirectives} from '@angular/forms';

import { UserService } from '../user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})

export class UserLoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  myGroup: FormControl;
  
 
  constructor(
    //  private formControl: FormControl,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) { }

  ngOnInit() {
    // this.myGroup = new FormGroup({
    //   UserName: new FormControl()
    // });

    // this.loginForm = this.formBuilder.group({
    //   userName: ['', Validators.required],
    //   password: ['']
    // });
    // this.userService.hacerLogout();
  }

  createForm(): FormGroup {
    return new FormGroup({
      userName: new FormControl(),
      userPassword: new FormControl()
    });
  }

  createFormBuilder(): FormGroup {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['']
    });
    return this.loginForm;
  }
  
  // this.userService.hacerLogout();


  // funcion para obtener los datos ingresados por el usuaro
  get Entry() { 
    return this.loginForm.controls;
  }

  llamarLogin() {
    
  }

  llamarCrearUsusario() {

  }

}
