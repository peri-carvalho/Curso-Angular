import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: 'Front-end Trainee',
        p: "Grupo Mucuripe PitStop - Presente"
      },
      text: "Desde Outubro de 2024, atuo como trainee aprendendo todo dia algo novo, como React, Angular, NodeJs, PostgreSql e outras tecnologias. Em 2025, estou me tornando um desenvolvedor Full Stack.",
    },
    {      
      summary: {
      strong: 'Back-end Trainee',
      p: "Grupo Mucuripe PitStop - Presente"
    },
    text: "Desde Outubro de 2024, atuo como trainee aprendendo todo dia algo novo, como Java, TypeScript , NodeJs, mySQL, PostgreSql e outras tecnologias.",
    },
    {      
      summary: {
      strong: 'Dev-Ops Trainee',
      p: "Grupo Mucuripe PitStop - Presente"
    },
    text: "Desde Outubro de 2024.",
    },
    {      
      summary: {
      strong: 'Mobile Trainee',
      p: "Grupo Mucuripe PitStop - Presente"
    },
    text: "Desde Outubro de 2024.",
    },
    {      
      summary: {
      strong: 'Tester Trainee',
      p: "Grupo Mucuripe PitStop - Presente"
    },
    text: "Desde Outubro de 2024.",
    },
  ]);
}
