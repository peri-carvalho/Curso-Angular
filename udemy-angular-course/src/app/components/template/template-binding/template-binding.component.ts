import { NgClass, NgStyle, NgSwitch } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = "Pericles Carvalho";
  public age = 33;
  /*
  public sum(val1:number, val2: number){
    return val1 + val2;
  }
    */

  public condition = this.age < 1 ? "teste" : "teste2";
  public isDisabled = true;
  //public isDisabled = false;

  public srcValue = "favicon.ico";

  /*constructor () {
    setTimeout(() => {
      this.name = 'João e Maria';
    }, 1000)
  }*/
  public isTextDecoration = this.age >= 33 ? 'underline' : 'none';

  public sum(){
    return this.age++;
  }
  public sub(){
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseMove(event: any){
    return console.log({
      clietX: event.clientX,
      cliety: event.clientY

    });
  }

}
