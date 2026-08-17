import { Component } from '@angular/core';
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
export class App {}