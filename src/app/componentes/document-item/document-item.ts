import { Component, input, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeType = 'success' | 'warning' | 'danger' | 'info' | 'default';

@Component({
  selector: 'app-document-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-item.html',
  styleUrl: './document-item.css'
})
export class DocumentItem {
  // Inputs com Signals
  icon = input<string>('fi fi-rr-document-signed');
  title = input.required<string>();
  subtitle = input<string>('');
  date = input<string>('');
  badgeText = input<string>('');
  badgeType = input<BadgeType>('default');

  // Computed Signal: Recalcula a cor apenas quando o badgeType() mudar
  statusColor = computed(() => {
    switch (this.badgeType()) {
      case 'success': return 'var(--success, #16a34a)';
      case 'warning': return 'var(--warning, #ca8a04)';
      case 'danger':  return 'var(--danger, #dc2626)';
      case 'info':    return 'var(--info, #2563eb)';
      default:        return 'var(--primary, #4354c0)';
    }
  });
}