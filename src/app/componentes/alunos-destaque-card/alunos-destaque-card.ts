import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AlunoItemComponent } from '../aluno-item/aluno-item';

interface AlunoDestaque {
  nome: string;
  turma: string;
  media: string | number;
  fotoUrl?: string;
}

@Component({
  selector: 'app-alunos-destaque-card',
  standalone: true,
  imports: [CommonModule, RouterLink, AlunoItemComponent],
  templateUrl: './alunos-destaque-card.html',
  styleUrl: './alunos-destaque-card.css'
})
export class AlunosDestaqueCard {
  alunos: AlunoDestaque[] = [
    {
      nome: 'Beatriz Lima',
      turma: 'Turma 9º Ano A',
      media: '9.8',
      fotoUrl: 'images/avatars/bl.jpg'
      
    },
    {
      
      nome: 'Lucas Gabriel Santos',
      turma: 'Turma 8º Ano B',
      media: '9.5',
      fotoUrl: 'images/avatars/lg.jpg'
    },
    {
     
      nome: 'Mariana Costa',
      turma: 'Turma 9º Ano A',
      media: '9.3'
    },
    {
      
      nome: 'Enzo Fernandez',
      turma: 'Turma 7º Ano C',
      media: '9.1'
    }
  ];
}