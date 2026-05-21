import { Component, inject } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { FormUtils } from '../../../shared/utils/form-utils';

@Component({
  selector: 'app-project-config-page',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './project-config-page.html',
})
export default class ProjectConfigPage {

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

    lenguajes: this.fb.array(
      [
        this.fb.control(
          'JavaScript',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ),

        this.fb.control(
          'TypeScript',
          [
            Validators.required,
            Validators.minLength(3)
          ]
        ),
      ],
      [
        Validators.minLength(2)
      ]
    ),

    tipo: [
      'fullstack',
      Validators.required
    ],

    notificaciones: [true],

    terminosAceptados: [
      false,
      Validators.requiredTrue
    ]

  });

  // CONTROL TEMPORAL
  newLenguaje: FormControl = this.fb.control(
    '',
    [
      Validators.required,
      Validators.minLength(3)
    ]
  ) as FormControl;

  // GETTER DEL FORMARRAY
  get lenguajes(): FormArray {
    return this.myForm.get('lenguajes') as FormArray;
  }

  // AGREGAR LENGUAJE
  onAddLenguaje(): void {

    if (this.newLenguaje.invalid) {
      this.newLenguaje.markAsTouched();
      return;
    }

    this.lenguajes.push(
      this.fb.control(
        this.newLenguaje.value,
        [
          Validators.required,
          Validators.minLength(3)
        ]
      )
    );

    this.newLenguaje.reset('');
  }

  // ELIMINAR LENGUAJE
  onDeleteLenguaje(index: number): void {
    this.lenguajes.removeAt(index);
  }

  // SUBMIT
  onSubmit(): void {

    this.myForm.markAllAsTouched();

    if (this.myForm.invalid) return;

    console.log('Proyecto guardado:', this.myForm.value);

  }

}