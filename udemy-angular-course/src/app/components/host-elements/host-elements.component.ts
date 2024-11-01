import { Component } from '@angular/core';

@Component({
  selector: 'app-host-elements',
  standalone: true,
  imports: [],
  templateUrl: './host-elements.component.html',
  styleUrl: './host-elements.component.scss',
  host: {
    role: 'button',
    '[attr.class]': 'class',
    '(document:keypress)': 'updateHostListener($event)',
    '(click)': 'updateClick()',
  },
})

export class HostElementsComponent {
  
  public class = 'vidafullstack';
  
  public updateHostListener(event: KeyboardEvent) {
    console.log(event);
  }

  public updateClick() {
    console.log('click');
    alert('click');
  }
}


