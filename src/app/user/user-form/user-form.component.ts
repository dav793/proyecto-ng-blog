import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormArray, FormBuilder, Validators} from '@angular/forms';

import { User } from '../user.model';
import { defaultCollections } from '../../default.collections'; // para usar las que estan para pruebas

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  
  // la idea es poder interpolarlos en el template dependiendo si queremos editar o crear un usuario :v
  pageTitleCreateUser: string = 'Create User';
  pageTitleEditUser: string = 'Edit User';

  model = new User({

  });

  constructor() { }

  ngOnInit() {
  }

}
