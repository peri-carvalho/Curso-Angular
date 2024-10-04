import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeiroComponente } from "./components/primeiro-componente/primeiro-componente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PrimeiroComponente],
  template: ` 
  <!-- <router-outlet></router-outlet> -->
  <h1>Curso de Angular</h1>
  <h2>Components</h2>
  {{title}}
  <app-primeiro-componente/>
  `,
})
export class AppComponent {
  title = 'udemy-angular-course';
}
