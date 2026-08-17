import { Component, ElementRef, AfterViewInit, ViewChild, signal, HostListener } from '@angular/core';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface DistributionData {
  [key: string]: number[];
}

@Component({
  selector: 'app-distribuicao-notas',
  standalone: true,
  imports: [],
  templateUrl: './distribuicao-notas.html',
  styleUrl: './distribuicao-notas.css',
})
export class DistribuicaoNotas implements AfterViewInit {
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

  // Faixas de notas (Eixo X)
  gradeRanges = ['0–4', '4–5', '5–6', '6–7', '7–8', '8–9', '9–10'];

  // Dados de Alunos por Faixa (Eixo Y)
  distributionData: DistributionData = {
    all: [5, 12, 28, 45, 62, 38, 15],
    '9°A': [1, 2, 5, 10, 15, 11, 4],
    '8°B': [2, 4, 8, 12, 14, 8, 2],
    '7°A': [1, 3, 7, 11, 18, 10, 5],
    '6°B': [1, 3, 8, 12, 15, 9, 4],
  };

  ngAfterViewInit(): void {
    this.initChart();
  }

  private initChart(): void {
  if (!this.canvas) return;

  this.chart = new Chart(this.canvas.nativeElement, {
    type: 'bar',
    data: {
      labels: this.gradeRanges, // ['0–4', '4–5', '5–6', '6–7', '7–8', '8–9', '9–10']
      datasets: [
        {
          label: 'Alunos',
          data: this.distributionData['all'],
          // ✅ Array de cores para cada barra (uma para cada faixa)
          backgroundColor: [
            '#E53E3E', // 0–4  (Vermelho / Alerta)
            '#DD6B20', // 4–5  (Laranja / Atenção)
            '#D69E2E', // 5–6  (Amarelo / Médio)
            '#319795', // 6–7  (Verde Água / Satisfatório)
            '#3182CE', // 7–8  (Azul / Bom)
            '#4354C0', // 8–9  (Roxo / Muito Bom)
            '#2A9D6C', // 9–10 (Verde / Excelente)
          ],
          hoverBackgroundColor: [
            '#C53030',
            '#C05621',
            '#B7791F',
            '#2C7A7B',
            '#2B6CB0',
            '#3242A4',
            '#227E57',
          ],
          borderRadius: 6,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => ` ${context.parsed.y} alunos`,
          },
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Faixas de Notas',
            font: { size: 12, weight: 'bold' },
            color: '#6B7280',
          },
          grid: { display: false },
        },
        y: {
          title: {
            display: true,
            text: 'Quantidade de Alunos',
            font: { size: 12, weight: 'bold' },
            color: '#6B7280',
          },
          beginAtZero: true,
          ticks: { stepSize: 10 },
          grid: { color: 'rgba(0, 0, 0, 0.05)' },
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

    // Atualiza os dados do gráfico
    this.chart.data.datasets[0].data = this.distributionData[value];
    this.chart.update();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    if (!target.closest('.custom-dropdown')) {
      this.isDropdownOpen.set(false);
    }
  }
}