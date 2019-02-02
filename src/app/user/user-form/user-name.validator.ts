// import { AbstractControl, ValidatorFn } from '@angular/forms';
// import { UserService } from '../user.service';

// export function userNameValidator(isUsed: boolean): ValidatorFn {
//   return (control: AbstractControl): {[key: string]: any} | null => {
//     if (isUsed) {
//         return null;
//     } else {
//         return {'is Used': {value: control.value}};
//     } 
//   };
// }
import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { UserService } from '../user.service';

@Injectable({ providedIn: 'root' })
export class UserNameValidator {
  constructor(private userService: UserService) {}

  static createValidator(checkUserNameService: UserService) {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {

      return checkUserNameService.checkUserNameAvailable(control.value).pipe(
        map(isAvailable => (!isAvailable ? { userNameAvailable: false} : null)),
        catchError(() => null)
      );
    };
  }
}