import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
  FormArray
} from '@angular/forms';

import { CommonModule } from '@angular/common';

import { passwordMatchValidator } from '../../shared/validators/password-match.validator';

import { emailUniqueValidator } from '../../shared/validators/email-unique.validator';

import { FormUtils } from '../../shared/utils/form-utils';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './signup.html',
})
export class SignupComponent {

  private fb = inject(FormBuilder);

  formUtils = FormUtils;

  signupForm = this.fb.group(
    {
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ],

      email: [
        '',
        [
          Validators.required,
          Validators.email
        ],
        [
          emailUniqueValidator()
        ]
      ],

      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ],

      confirmPassword: [
        '',
        [
          Validators.required
        ]
      ],

      role: [
        'frontend',
        Validators.required
      ],

      notifications: [true],

      terms: [
        false,
        Validators.requiredTrue
      ],

      languages: this.fb.array([
        this.fb.control('Angular')
      ])
    },
    {
      validators: passwordMatchValidator
    }
  );

  get languages(): FormArray {
    return this.signupForm.get('languages') as FormArray;
  }

  addLanguage(): void {

    this.languages.push(
      this.fb.control('')
    );
  }

  removeLanguage(index: number): void {

    this.languages.removeAt(index);
  }

  onSubmit(): void {

    if (this.signupForm.invalid) {

      this.signupForm.markAllAsTouched();
      return;
    }

    console.log(this.signupForm.value);

    alert('Formulario enviado');

    this.signupForm.reset();
  }
}