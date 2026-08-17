import { Component } from '@angular/core';
import { StatCardComponent } from '../../componentes/stat-card/stat-card';

@Component({
  selector: 'app-painel',
  imports: [StatCardComponent],
  templateUrl: './painel.html',
  styleUrl: './painel.css',
})
export class Painel {}
