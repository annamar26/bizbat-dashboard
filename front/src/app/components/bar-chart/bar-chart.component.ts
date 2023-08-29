import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { Chart, ChartTypeRegistry } from 'chart.js';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnDestroy {
  barChart!: Chart;
  @Input() label: string = 'views';
  @Input() data!: any[];

  constructor(public renderer: Renderer2, private dataService: DataService) {}
  ngOnDestroy(): void {
    if (this.barChart) {
      this.barChart.destroy();
    }
  }

  ngOnInit(): void {
    this.dataService.optionSubject.subscribe((res) => {
      this.label = res;
      console.log(this.label);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes?.['data'].currentValue;

    this.createBarChart();
  }

  createBarChart() {
    if (this.barChart) {
      this.barChart.destroy();
    }
    const canvas: HTMLCanvasElement =
      this.renderer.selectRootElement('.barChartCanvas');
    const ctx = canvas.getContext('2d');
    const colors = ['#E5399D', '#6742F5', '#20269E', '#0E0821'];

    if (ctx) {
      const userLabels = this.data.map((user: any) => user.id);
      const userFollowers = this.data.map((user: any) => user.total);
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      console.log('label', this.label);

      try {
        // colors.forEach((color: string, index: number) =>  {gradient.addColorStop(index, color)})
        this.barChart = new Chart(ctx, {
          type: this.label.includes('top')
            ? 'bar'
            : ('pie' as keyof ChartTypeRegistry),
          data: {
            labels: userLabels,
            datasets: [
              {
                label: `Total ${this.label}`,
                data: userFollowers,
                backgroundColor: colors,
                borderColor: '#20269E',
                borderWidth: 2, // Grosor del borde
                borderRadius: 10,
                hoverBorderColor: '#6742F5', // Cambia el color del borde al pasar el cursor
                hoverBorderWidth: 2,
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true,
                title: {
                  display: true,
                  text: `Total ${this.label}`,
                },
              },
              x: {
                grid: {
                  display: true, // Desactiva las líneas de la cuadrícula horizontal
                },
              },
            },
            plugins: {
              legend: {
                display: true, // Cambia a false si no deseas mostrar la leyenda
                position: 'bottom', // Puede ser 'top', 'bottom', 'left', 'right'
                labels: {
                  boxPadding: 16,
                  font: {
                    size: 16, // Cambia el tamaño de la fuente de la leyenda
                    weight: 'bold', // Cambia el peso de la fuente de la leyenda
                  },
                },
              },
            },
          },
        });
      } catch (error) {
        console.log('ERROR: ', error);
      }
    } else {
      console.error('No se pudo obtener el contexto del lienzo.');
    }
  }
}
