import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';

function textValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const hasUpperCase = /[A-Z]/.test(control.value);
    const hasNumber = /[0-9]/.test(control.value);
    
    if(hasUpperCase && hasNumber) {
      return null
    }
    return {textValidator: true};
  };
}

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.scss'
})
export class ReactiveFormsComponent {
  //metodo 1
  // constructor(private _fb: FormBuilder) {
  //   this.profileForm = this._fb.group({
  //     name: [''],
  //     myStacks: this._fb.group({
  //       frontEnd: ['Angular'],
  //       backEnd: ['NodeJs'],
  //     }),
  //     myFavoriteFoods: this._fb.array(['Salada']),
  //   });
  // }

  // public profileForm: FormGroup;
  //2 metodo
  #fb = inject(FormBuilder);

  public profileForm = this.#fb.group({
    name: ['',[Validators.required, textValidator()]],
    myStacks: this.#fb.group({
      frontEnd: ['Angular'],
      backEnd: ['NodeJs'],
    }),
    myFavoriteFoods: this.#fb.array(['Salada']),
  })

  public update() {
  this.profileForm.patchValue({
    name: 'João',
    myStacks: {
      frontEnd: 'React',
      backEnd: 'NodeJs',
    },  
  });
  }

  public addMyFavoriteFoods(newFood: string) {
    const myFavoriteFoods = this.profileForm.get(
      'myFavoriteFoods'
    ) as FormArray;
    const addNewFood = new FormControl(newFood);
    
    myFavoriteFoods.push(addNewFood);
  }

  public submit() {
    console.log(this.profileForm.value);
    if (this.profileForm.valid) {
      console.log(this.profileForm.value);
    }
  }
}
