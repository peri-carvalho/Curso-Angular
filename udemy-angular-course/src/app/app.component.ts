import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Componentes
import { PrimeiroComponente } from "./components/primeiro-componente/primeiro-componente.component";
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeiroComponente, TemplateBindingComponent],
  template: ` 
  <!-- <router-outlet></router-outlet> -->
  <h1>Curso de Angular</h1>
  <h2>Components</h2>
  {{title}}
  <app-primeiro-componente/>
  <app-template-binding/>
  `,
})
export class AppComponent {
  title = 'udemy-angular-course';
}
