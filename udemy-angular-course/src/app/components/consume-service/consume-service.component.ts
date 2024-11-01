import { AsyncPipe, JsonPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { PrimeiroComponente } from '@components/primeiro-componente/primeiro-componente.component';
import { ApiService } from 'app/services/api.service';
import { concatMap } from 'rxjs';

@Component({
  selector: 'app-consume-service',
  standalone: true,
  imports: [PrimeiroComponente, AsyncPipe, JsonPipe],
  templateUrl: './consume-service.component.html',
  styleUrl: './consume-service.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConsumeServiceComponent implements OnInit {

  //direto no contrutor
  // constructor( private _apiService: ApiService  
  // ){}
 
  // ngOnInit(): void {
  //   console.log(this.#apiService.name());

  //   this.#apiService.name$.subscribe({
  //     next: (next) => console.log(next),
  //     error: (error) => console.log(error),
  //     complete: () => console.log('complete'),
  //   })
  //   this.#apiService.name$.next('Pericles Carvalho $$');
  //   this.#apiService.name.set('Pericles Carvalho 2');

  //   setTimeout(() => {
  //     console.log(this.#apiService.name())
  //   },2000)
  // }

  // public getTask = signal<null | Array<{id: string, title: string}>>(null);

  // public getTask$ = this.#apiService.httpListTask$();
  
  // ngOnInit(): void {
  //   this.getTask$.subscribe({
  //     next: (next) => {
  //         console.log(next)
  //         this.getTask.set(next)
  //     },
  //     error: (error) => console.log(error),
  //     complete: () => console.log('complete'),
  //   })
  // }
  // public getTask$ = toSignal(this.#apiService.httpListTask$()); part 1:53 aula 130
  #apiService = inject(ApiService);

  public getTaskList = this.#apiService.getTaskList;
  public getTaskId = this.#apiService.getTaskId;

  public getTaskListError = this.#apiService.getTaskListError;
  public getTaskIdError = this.#apiService.getTaskIdError;
  public getTaskCreateError = this.#apiService.getTaskCreateError;
  public getTaskUpdateError = this.#apiService.getTaskUpdateError;
  public getTaskDeleteError = this.#apiService.getTaskDeleteError;
  

  ngOnInit(): void {
    this.#apiService.httpTaskList$().subscribe();
    this.#apiService.httpTaskId$('dsdsdsd').subscribe();
  }

  public httpTaskCreate(title: string) {
    return this.#apiService
    .httpTaskCreate$(title)
    .pipe(concatMap(() => this.#apiService.httpTaskList$()))
    .subscribe({
      next: (next) => console.log(next),
      error: (error) => console.log(error),
    });
  }

  public httpTaskUpdate(id: string,title: string) {
    return this.#apiService
    .httpTaskUpdate$(id, title)
    .pipe(concatMap(() => this.#apiService.httpTaskList$()))
    .subscribe({
      next: (next) => console.log(next),
      error: (error) => console.log(error),
    });
  }

  public httpTaskDelete(id: string) {
    return this.#apiService
    .httpTaskDelete$(id)
    .pipe(concatMap(() => this.#apiService.httpTaskList$()))
    .subscribe({
      next: (next) => console.log(next),
      error: (error) => console.log(error),
    });
  }

}
