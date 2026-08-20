import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { InfoCardTurma } from '../info-card-turma/info-card-turma';

@Component({
  selector: 'app-card-turma',
  imports: [CommonModule, InfoCardTurma, RouterLink],
  templateUrl: './card-turma.html',
  styleUrl: './card-turma.css',
})
export class CardTurma {

  link = input<string | any[]>();

  cor = input<string>('#4354c0');

  // Configurações do Topo
  icon = input<string>('fi fi-rr-book-bookmark');
  titulo = input.required<string>();
  subtitulo = input.required<string>();

  // Métricas
  totalAlunos = input.required<number | string>();
  taxaAprovacao = input.required<number>();
  numeroSala = input.required<number | string>();

  // Rodapé
  diasAula = input.required<string>();

  // Progresso em %
  progressoLargura = computed(() => {
    const taxa = Number(this.taxaAprovacao());
    if (isNaN(taxa)) return '0%';
    return `${Math.min(Math.max(taxa, 0), 100)}%`;
  });

}
