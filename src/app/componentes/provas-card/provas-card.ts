import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DocumentItem } from '../document-item/document-item';
interface ProvaItem {
  icon: string;
  title: string;
  subtitle: string;
  date: string;
  badgeText: string;
  badgeType: 'success' | 'warning' | 'danger' | 'info' | 'default';
}

@Component({
  selector: 'app-provas-card',
  standalone: true,
  imports: [CommonModule, RouterLink, DocumentItem],
  templateUrl: './provas-card.html',
  styleUrl: './provas-card.css'
})
export class ProvasCard {
  provas: ProvaItem[] = [
    {
      icon: 'fi fi-rr-document-signed',
      title: 'Avaliação Mensal de Matemática',
      subtitle: 'Turma 8º Ano A • Prof. Ricardo',
      date: '22/08/26',
      badgeText: 'Pendente',
      badgeType: 'warning'
    },
    {
      icon: 'fi fi-rr-document-signed',
      title: 'Prova de História - 2º Bimestre',
      subtitle: 'Turma 9º Ano B • Profª Ana',
      date: '25/08/26',
      badgeText: 'Agendada',
      badgeType: 'info'
    },
    {
      icon: 'fi fi-rr-document-signed',
      title: 'Simulado Geral de Ciências',
      subtitle: 'Ensino Médio • Geral',
      date: '30/08/26',
      badgeText: 'Confirmada',
      badgeType: 'success'
    }
  ];
}