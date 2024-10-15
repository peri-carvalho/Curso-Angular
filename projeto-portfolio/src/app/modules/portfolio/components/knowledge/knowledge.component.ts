import { Component, signal } from '@angular/core';
//Interface
import { IKnowledge } from '../../interface/Iknowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {

public arrayKnowledge = signal<IKnowledge[]>([
  {
    src: 'assets/knowledge/html5.svg',
    alt: 'Html5',
  },
  {
    src: 'assets/knowledge/javasccript.svg',
    alt: 'JavaScript',
  },
  {
    src: 'assets/knowledge/unity.svg',
    alt: 'Unity',
  },
  {
    src: 'assets/knowledge/angular.svg',
    alt: 'Angular',
  }
]);
}
