import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
public firstName = signal('Pericles');
public lastName = signal('Carvalho');

public fullName = computed(() => {
  return this.firstName() + this.lastName();
});

public array = signal([1]);

/*
effect - raramente sao necessarios na maioria dos codigos,
mas podem ser uteis em circunstancias especificas.
- registro de dados sendo exibidos e quando eles mudam, seja para analise
ou como ferramenta de depuração.

-manter os dados sincronizados com o window.localStorage.

-adicionando comportamento DOM personalizado que não pode ser expresso com sintaxe
de modelo

executar renderização personalizada em um <canvas>, biblioteca de graficos 
ou outra biblioteca de UI de terceiros.
*/ 


constructor () {
  effect(() => {
    console.log(this.firstName())
    console.log(this.array())
  })
}

public updateName(){
  return this.firstName.set("João ")
}

public updateArray(){
  this.firstName.update(() => {
    return "João "
  })
  this.array.update((oldValue: Array<number>) => {
    console.log(oldValue);
    return [...oldValue, oldValue.length + 1];
  })
}
}
