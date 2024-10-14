import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Componentes
import { PrimeiroComponente } from "./components/primeiro-componente/primeiro-componente.component";
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from "./components/template/template-deferrable-views/template-deferrable-views.component";
import { SignalsComponent } from './components/signals/signals/signals.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PrimeiroComponente, 
    TemplateBindingComponent, 
    TemplateVariablesComponent, 
    TemplateControlFlowComponent, 
    TemplateDeferrableViewsComponent,
    SignalsComponent
    ],
  template: ` 
  <!-- <router-outlet></router-outlet> -->
  <h1>Curso de Angular</h1>
  <!-- <h2>Components</h2>
  {{title}}
  <app-primeiro-componente/>
  <app-template-binding/> 
  <app-template-variables/> 
  <app-template-control-flow /> 
  <app-template-deferrable-views /> -->
  <app-signals />
  `,
})
export class AppComponent {
  title = 'udemy-angular-course';
}
