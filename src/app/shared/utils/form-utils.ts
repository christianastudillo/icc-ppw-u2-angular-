import {
  AbstractControl,
  FormArray,
  FormGroup,
  ValidationErrors
} from '@angular/forms';

export class FormUtils {

  // VALIDAR CAMPO
  static isValidField(
    form: FormGroup,
    fieldName: string
  ): boolean {

    const control = form.controls[fieldName];

    return !!control?.errors && control.touched;
  }

  // OBTENER ERROR
  static getFieldError(
    form: FormGroup,
    fieldName: string
  ): string | null {

    const control = form.controls[fieldName];

    if (!control) return null;

    const errors = control.errors ?? {};

    return this.getTextError(errors);
  }

  // TRADUCIR ERRORES
  static getTextError(
    errors: ValidationErrors
  ): string | null {

    for (const key of Object.keys(errors)) {

      switch (key) {

        case 'required':
          return 'Este campo es requerido';

        case 'requiredTrue':
          return 'Debe aceptar este campo';

        case 'minlength':
          return `Mínimo ${errors['minlength'].requiredLength} caracteres`;

        case 'maxlength':
          return `Máximo ${errors['maxlength'].requiredLength} caracteres`;

        case 'min':
          return `Valor mínimo: ${errors['min'].min}`;

        case 'max':
          return `Valor máximo: ${errors['max'].max}`;

        case 'email':
          return 'Formato de correo inválido';

        default:
          return 'Campo inválido';

      }

    }

    return null;

  }

  // VALIDAR FORMARRAY
  static isValidFieldInArray(
    formArray: FormArray,
    index: number
  ): boolean {

    const control = formArray.controls[index];

    return !!control?.errors && control.touched;
  }

  // ERROR FORMARRAY
  static getFieldErrorInArray(
    formArray: FormArray,
    index: number
  ): string | null {

    if (formArray.controls.length === 0) return null;

    const errors = formArray.controls[index]?.errors ?? {};

    return this.getTextError(errors);

  }

}