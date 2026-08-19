import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-document-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-item.html',
  styleUrl: './document-item.css'
})
export class DocumentItem {
  @Input() icon: string = 'fi fi-rr-document-signed';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() date: string = '';
  @Input() badgeText: string = '';
  @Input() badgeType: 'success' | 'warning' | 'danger' | 'info' | 'default' = 'default';

  // Mapeia o tipo para a cor base que gerenciará o tom e as transparências
  get statusColor(): string {
    switch (this.badgeType) {
      case 'success': return 'var(--success, #16a34a)';
      case 'warning': return 'var(--warning, #ca8a04)';
      case 'danger':  return 'var(--danger, #dc2626)';
      case 'info':    return 'var(--info, #2563eb)';
      default:        return 'var(--primary, #4354c0)';
    }
  }
}