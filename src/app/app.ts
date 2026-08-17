import { Component, signal, effect } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './componentes/sidebar/sidebar';
import { HeadNotification } from "./componentes/head-notification/head-notification";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, HeadNotification],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  sidebarAberta = signal<boolean>(false);

  constructor() {
    effect(() => {
      if (this.sidebarAberta()) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
  }

  toggleSidebar(): void {
    this.sidebarAberta.update((estado) => !estado);
  }

  fecharSidebar(): void {
    this.sidebarAberta.set(false);
  }
}