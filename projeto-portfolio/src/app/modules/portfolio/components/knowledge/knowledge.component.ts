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

public arrayKnowledge = signal<IKnowledge[ ]>([
  {
    src: 'assets/knowledge/html5.svg',
    alt: 'html5',
  },
  {
    src: 'assets/knowledge/html5.svg',
    alt: 'html5',
  },
  {
    src: 'assets/knowledge/html5.svg',
    alt: 'html5',
  },
  {
    src: 'assets/knowledge/html5.svg',
    alt: 'html5',
  },
])

}
