import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { UserFormComponent } from './user-form/user-form.component';
import { UserViewComponent } from './user-view/user-view.component';

import { MaterialPackageModule } from '../material-package/material-package.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialPackageModule
  ],
  declarations: [
    UserFormComponent, 
    UserViewComponent
  ],
  exports: [
    UserFormComponent, 
    UserViewComponent
  ],
  providers: [
    // {
    //   provide: MAT_CHIPS_DEFAULT_OPTIONS,
    //   useValue: {
    //     separatorKeyCodes: [ENTER, COMMA]
    //   }
    // }
  ]
})
export class UserModule { }
