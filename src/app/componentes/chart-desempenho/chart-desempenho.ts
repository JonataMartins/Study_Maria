import { Component, ElementRef, AfterViewInit, ViewChild, signal, HostListener } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface ClassDataset {
  label: string;
  data: number[];
  borderColor: string;
  backgroundColor: string;
  tension: number;
  pointRadius: number;
  pointHoverRadius: number;
}

@Component({
  selector: 'app-chart-desempenho',
  standalone: true,
  imports: [],
  templateUrl: './chart-desempenho.html',
  styleUrl: './chart-desempenho.css',
})
export class ChartDesempenho implements AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas!: ElementRef<HTMLCanvasElement>;

  chart!: Chart;
  selectedClass = signal<string>('all');
  selectedOptionLabel = signal<string>('Todas as turmas');
  isDropdownOpen = signal<boolean>(false);

  options = [
    { value: 'all', label: 'Todas as turmas' },
    { value: '9°A', label: 'Turma 9°A' },
    { value: '8°B', label: 'Turma 8°B' },
    { value: '7°A', label: 'Turma 7°A' },
    { value: '6°B', label: 'Turma 6°B' },
  ];

  months = ['Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'];

  allDatasets: ClassDataset[] = [
    {
      label: '9°A',
      data: [7.8, 8.2, 8.0, 8.5, 8.7, 9.0],
      borderColor: '#4354C0',
      backgroundColor: 'rgba(67, 84, 192, 0.1)',
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
    },
    {
      label: '8°B',
      data: [6.5, 7.0, 7.2, 7.5, 7.8, 8.1],
      borderColor: '#2A9D6C',
      backgroundColor: 'rgba(42, 157, 108, 0.1)',
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
    },
    {
      label: '7°A',
      data: [8.2, 8.0, 8.4, 8.1, 8.5, 8.8],
      borderColor: '#D97A32',
      backgroundColor: 'rgba(217, 122, 50, 0.1)',
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
    },
    {
      label: '6°B',
      data: [7.0, 7.4, 6.8, 7.2, 7.5, 7.9],
      borderColor: '#9B5FC0',
      backgroundColor: 'rgba(155, 95, 192, 0.1)',
      tension: 0.4,
      pointRadius: 5,
      pointHoverRadius: 7,
    },
  ];

  ngAfterViewInit(): void {
    this.initChart();
  }

  private initChart(): void {
    if (!this.canvas) return;

    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'line',
      data: {
        labels: this.months,
        datasets: [...this.allDatasets],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: { mode: 'index', intersect: false },
        scales: {
          y: {
            min: 5,
            max: 10,
            ticks: { stepSize: 1 },
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
          },
          x: { grid: { display: false } },
        },
        plugins: {
          legend: {
            position: 'top',
            labels: { usePointStyle: true, boxWidth: 8 },
          },
        },
      },
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen.update((prev) => !prev);
  }

  selectClass(value: string, label: string): void {
    this.selectedClass.set(value);
    this.selectedOptionLabel.set(label);
    this.isDropdownOpen.set(false);

    if (value === 'all') {
      this.chart.data.datasets = [...this.allDatasets];
    } else {
      this.chart.data.datasets = this.allDatasets.filter(
        (ds) => ds.label === value
      );
    }

    this.chart.update();
  }

  // Fecha o dropdown se clicar fora dele
  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-dropdown')) {
      this.isDropdownOpen.set(false);
    }
  }
}