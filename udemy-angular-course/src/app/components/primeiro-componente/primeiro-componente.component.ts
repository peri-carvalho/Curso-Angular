import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-primeiro-componente',
  standalone: true,
  imports: [],
  templateUrl: './primeiro-componente.component.html',
  styleUrl: './primeiro-componente.component.scss'
})
export class PrimeiroComponente implements OnInit {
  public name = "Primeiro Componente";

  #apiService = inject(ApiService);

  ngOnInit(): void {
    console.log(this.#apiService.name());

    this.#apiService.name$.subscribe({
      next: (next) => console.log(next),
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    })
    this.#apiService.name$.next('Pericles Carvalho $$');
    this.#apiService.name.set('Pericles Carvalho 2');

    setTimeout(() => {
      console.log(this.#apiService.name())
    },2000)
  }
}
