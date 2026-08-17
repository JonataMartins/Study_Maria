import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router'; // Esses imports são para eu conseguir colocar os links corretamente e o outro para ver qual link está ativo no momento

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class SidebarComponent {}