import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  imports: [],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css',
})
export class StatCardComponent {
  title = input.required<string>();
  value = input.required<string | number>();
  subtitle = input<string>('');
  iconClass = input.required<string>();
  
  variant = input<'chart-1' | 'chart-2' | 'chart-3' | 'chart-4' | 'chart-5'>('chart-1');
}