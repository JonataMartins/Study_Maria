import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluno-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno-item.html',
  styleUrl: './aluno-item.css'
})
export class AlunoItemComponent {
  nome = input.required<string>();
  turma = input.required<string>();
  media = input<string | number>('0.0');
  fotoUrl = input<string>();

  // Computed Signal: Recalcula automaticamente quando nome() muda
  iniciais = computed(() => {
    const nomeAtual = this.nome();
    if (!nomeAtual) return '';
    
    const nomes = nomeAtual.trim().split(' ');
    if (nomes.length === 1) return nomes[0].substring(0, 2).toUpperCase();
    return (nomes[0][0] + nomes[nomes.length - 1][0]).toUpperCase();
  });
}