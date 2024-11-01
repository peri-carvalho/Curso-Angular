import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-forms',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-forms.component.html',
  styleUrl: './template-driven-forms.component.scss'
})
export class TemplateDrivenFormsComponent {
  public listComidas = signal<Array<{comida: string, preco: string}>>([
    {
      comida: 'X-burguer', preco: 'R$ 4,00'
    },
    {
      comida: 'Cachorro Quente', preco: 'R$ 3,00'
    },  
    {
      comida: 'X-Salada', preco: 'R$ 5,00'
    },
  ]);

  public submitForm(form: NgForm) {
    console.log(form.valid);
    if(form.valid) {
      console.log(form.value);
    }
  }
}
