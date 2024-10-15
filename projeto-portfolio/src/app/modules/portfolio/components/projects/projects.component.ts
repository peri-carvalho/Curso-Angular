import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/projects/agualimpa.png',
      alt: 'Jogo Agua Limpa',
      title: 'Agua Limpa',
      width: '100px',
      height: '100px',
      description: 
        '<p>Jogo single player, com objetivo de coletar o maximo de lixos pelo caminho elimine monstros. reciclar é a chave para adquirir mais pontos</p>',
      links: [ 
      {
        name: 'Github',
        href: 'https://github.com/PericlesCarvalho/',
      },
     ],
    },
  ]);
}
