import { Component } from '@angular/core';

@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.scss'
})
export class PrimeiroComponente {
public name = "Primeiro Componente";
}
