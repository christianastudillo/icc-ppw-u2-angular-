import { Component, inject } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { FormUtils } from '../../../../shared/utils/form-utils';

@Component({
  selector: 'app-profile-page',

  standalone: true,

  imports: [
    CommonModule,
    ReactiveFormsModule
  ],

  templateUrl: './profile-page.html',
})

export class ProfilePage {

  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  myForm: FormGroup = this.fb.group({

    nombre: [
      '',
      [
        Validators.required,
        Validators.minLength(3)
      ]
    ],

    edad: [
      0,
      [
        Validators.required,
        Validators.min(18)
      ]
    ],

    correo: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ]
  });

  get nombre() {
    return this.myForm.get('nombre')!;
  }

  get edad() {
    return this.myForm.get('edad')!;
  }

  get correo() {
    return this.myForm.get('correo')!;
  }

  onSubmit(): void {

    if (this.myForm.invalid) {

      this.myForm.markAllAsTouched();

      return;
    }

    console.log(this.myForm.value);

    alert('Perfil guardado correctamente');

    this.myForm.reset();
  }
}