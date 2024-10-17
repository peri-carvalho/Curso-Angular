import { Component, inject, signal } from '@angular/core';
//Interface
import { IProjects } from '../../interface/IProjects.interface';
//Material Angular
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
//Enum
import { EDialogPannelClass } from '../../enum/EDialogPannelClass';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

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
        href: 'https://github.com/peri-carvalho',
      },
     ],
    },
  ]);

  public openDialog(data : IProjects) {
    this.#dialog.open(DialogProjectsComponent, { 
      data,
      panelClass: EDialogPannelClass.PROJECTS,
    });
  }
}
