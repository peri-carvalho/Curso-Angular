import { Component } from '@angular/core';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Pericles Carvalho";
  public age = 33;

  public sum(val1:number, val2: number){
    return val1 + val2;
  }

  public condition = this.age < 1 ? "teste" : "teste2";
  public isDisabled = true;
  //public isDisabled = false;

  public srcValue = "favicon.ico";

  /*constructor () {
    setTimeout(() => {
      this.name = 'João e Maria';
    }, 1000)
  }*/
}
