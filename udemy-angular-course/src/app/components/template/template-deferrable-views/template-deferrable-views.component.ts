import { Component } from '@angular/core';
import { PrimeiroComponente } from '../../primeiro-componente/primeiro-componente.component';
import { delay, Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-template-deferrable-views',
  standalone: true,
  imports: [ PrimeiroComponente, AsyncPipe ],
  templateUrl: './template-deferrable-views.component.html',
  styleUrl: './template-deferrable-views.component.scss'
})
export class TemplateDeferrableViewsComponent {
  public isTrue = false;

  public loadingData$: Observable<string[]> = of ([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));

}
