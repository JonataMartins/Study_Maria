import { Component, input } from '@angular/core';

@Component({
  selector: 'app-info-card-turma',
  imports: [],
  templateUrl: './info-card-turma.html',
  styleUrl: './info-card-turma.css',
})
export class InfoCardTurma {
  valor = input.required<string | number>();
  subtitulo = input.required<string>();
  cor = input<string>('var(--primary)');
}
