import { Component, input, output, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class SidebarComponent {
  // Recebe se a sidebar deve estar aberta no mobile
  estaAberta = input<boolean>(false);

  // Evento para avisar o pai que deve fechar a sidebar
  onFechar = output<void>();

  professorName = signal<string>('Maria Silva');
  subject = signal<string>('Professora de História');

  fecharSidebar(): void {
    this.onFechar.emit();
  }
}