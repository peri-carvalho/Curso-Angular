import { ChangeDetectionStrategy, Component, Input, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//Componentes
import { PrimeiroComponente } from "./components/primeiro-componente/primeiro-componente.component";
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from "./components/template/template-variables/template-variables.component";
import { TemplateControlFlowComponent } from './components/template/template-control-flow/template-control-flow.component';
import { TemplateDeferrableViewsComponent } from "./components/template/template-deferrable-views/template-deferrable-views.component";
import { SignalsComponent } from './components/signals/signals/signals.component';
import { PaiOuMaeComponent } from './components/comunicacao-entre-components/pai-ou-mae/pai-ou-mae.component';
import { OutputComponent } from './components/comunicacao-entre-components/output/output.component';
import { InputComponent } from './components/comunicacao-entre-components/input/input.component';
import { AngularPipesComponent } from "./components/pipes/angular-pipes/angular-pipes.component";
import { TemplateDrivenFormsComponent } from './components/forms/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';
import { ContentComponent } from './components/content/content.component';
import { HostElementsComponent } from './components/host-elements/host-elements.component';
import { LifeCycleComponent } from './components/life-cycle/life-cycle.component';
import { ConsumeServiceComponent } from '@components/consume-service/consume-service.component';
//environments
import { environment } from 'environments/environment';


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
    SignalsComponent,
    PaiOuMaeComponent,
    InputComponent,
    OutputComponent,
    AngularPipesComponent,
    ReactiveFormsComponent,
    TemplateDrivenFormsComponent,
    ContentComponent,
    HostElementsComponent,
    LifeCycleComponent,
    ConsumeServiceComponent
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
  <app-template-deferrable-views /> 
  <app-signals /> 
  <app-pai-ou-mae /> 
  <app-angular-pipes />  
  <app-template-driven-forms /> 
  <app-reactive-forms /> 
  <app-content>
    <header id="header">
      <p>Header</p>
    </header>
    <p text>Text</p>
    <p text>Text</p>
    <footer class="footer">
      <p>Footer</p>
    </footer>
    <p text>Text</p>
  </app-content> 
  <app-host-elements/>

  @if(boolean){
  <app-life-cycle [inputMyNumber]="number()">
    <p #text>Text</p>
  </app-life-cycle>
  }
  <button (click)="boolean = !boolean">Destroy Component</button>
  -->
  <app-consume-service/>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppComponent{
  // title = 'udemy-angular-course';
  // public number = signal(1);
  // public boolean = true;

  // ngOnInit(): void {
  //   setInterval(() => {
  //     this.number.update((oldValue) =>{
  //       return oldValue + 1;
  //     })
  //   }, 4000)
  // }
  constructor(){
    console.log(environment.env);
  }

}
