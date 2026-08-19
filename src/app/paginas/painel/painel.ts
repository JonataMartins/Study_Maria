import { Component, OnInit, signal } from '@angular/core';
import { StatCard } from '../../componentes/stat-card/stat-card';
import { ChartDesempenho } from "../../componentes/chart-desempenho/chart-desempenho";
import { DistribuicaoNotas } from "../../componentes/distribuicao-notas/distribuicao-notas";
import { ProvasCard } from "../../componentes/provas-card/provas-card";
import { AlunosDestaqueCard } from "../../componentes/alunos-destaque-card/alunos-destaque-card";

@Component({
  selector: 'app-painel',
  imports: [StatCard, ChartDesempenho, DistribuicaoNotas, ProvasCard, AlunosDestaqueCard],
  templateUrl: './painel.html',
  styleUrl: './painel.css',
})
export class Painel implements OnInit {
  professorName = signal<string>('Maria Melo');

  greeting = signal<string>('');
  formattedDate = signal<string>('');

  ngOnInit(): void {
    this.updateGreetingAndDate();
  }

  private updateGreetingAndDate(): void {
    const now = new Date();
    const hour = now.getHours();

    if (hour >= 5 && hour < 12) {
      this.greeting.set('Bom dia');
    } else if (hour >= 12 && hour < 18) {
      this.greeting.set('Boa tarde');
    } else {
      this.greeting.set('Boa noite');
    }

    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };

    const dateFormatted = now.toLocaleDateString('pt-BR', options);

    const capitalizedDate = dateFormatted.charAt(0).toUpperCase() + dateFormatted.slice(1);

    this.formattedDate.set(capitalizedDate);
  }
}