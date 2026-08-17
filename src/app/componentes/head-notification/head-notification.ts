import { Component, inject, signal, computed } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

interface NotificationItem {
  id: number;
  message: string;
  time: string;
  icon: string;
}

@Component({
  selector: 'app-head-notification',
  standalone: true,
  imports: [],
  templateUrl: './head-notification.html',
  styleUrl: './head-notification.css',
})
export class HeadNotification {
  private router = inject(Router);

  currentPage = signal<string>('Painel');
  showNotifications = signal<boolean>(false);

  // Lista dinâmica de notificações
  notifications = signal<NotificationItem[]>([
    {
      id: 1,
      message: 'Nova entrega de trabalho de História',
      time: 'Há 10 min',
      icon: 'fi fi-rr-info',
    },
    {
      id: 2,
      message: 'Reunião de professores às 15h',
      time: 'Há 1 hora',
      icon: 'fi fi-rr-calendar',
    },
  ]);

  // Calcula a quantidade automaticamente com base no tamanho da lista
  unreadNotifications = computed(() => this.notifications().length);

  constructor() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.updatePageTitle(event.urlAfterRedirects);
      });
  }

  private updatePageTitle(url: string): void {
    if (url.includes('painel') || url === '/') {
      this.currentPage.set('Painel');
    } else if (url.includes('alunos')) {
      this.currentPage.set('Alunos');
    } else if (url.includes('aulas')) {
      this.currentPage.set('Aulas');
    } else if (url.includes('turmas')) {
      this.currentPage.set('Turmas');
    } else if (url.includes('provas')) {
      this.currentPage.set('Provas');
    } else {
      this.currentPage.set('Dashboard');
    }
  }

  toggleNotifications(): void {
    this.showNotifications.update((prev) => !prev);
  }
}
