import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-aluno-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './aluno-item.html',
  styleUrl: './aluno-item.css'
})
export class AlunoItemComponent {
  @Input() nome: string = '';
  @Input() turma: string = '';
  @Input() media: string | number = '0.0';
  @Input() fotoUrl?: string;

  get iniciais(): string {
    if (!this.nome) return '';
    const nomes = this.nome.trim().split(' ');
    if (nomes.length === 1) return nomes[0].substring(0, 2).toUpperCase();
    return (nomes[0][0] + nomes[nomes.length - 1][0]).toUpperCase();
  }
}