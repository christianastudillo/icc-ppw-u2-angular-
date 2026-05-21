import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors
} from '@angular/forms';

import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export function emailUniqueValidator(): AsyncValidatorFn {

  return (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {

    if (!control.value) {
      return of(null);
    }

    const takenEmails = [
      'admin@example.com',
      'test@test.com',
      'user@example.com'
    ];

    return of(control.value).pipe(

      delay(1500),

      map((email: string) => {

        return takenEmails.includes(email)
          ? { emailTaken: true }
          : null;

      })
    );
  };
}