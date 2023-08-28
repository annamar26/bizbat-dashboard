import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { Chart } from 'chart.js';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class TableViewComponent {
  barChart!: Chart;
  @Input() label: string ='views';

  constructor( public renderer: Renderer2){}

  users = [
    {
      id: '1',
      username: 'user1',
      totalFollowers: 10,

    },
    {
      id: '2',
      username: 'user2',
      totalFollowers: 25,

    },
  
  ];

  ngOnInit(): void {
    this.createBarChart();
  }

  createBarChart() {
    const canvas: HTMLCanvasElement = this.renderer.selectRootElement('.barChartCanvas')
    const ctx = canvas.getContext('2d');
    const colors = ['#E5399D', '#6742F5', '#20269E', '#0E0821']

    if (ctx) {
      const userLabels = this.users.map(user => `${user.username}- ${user.id}`);
      const userFollowers = this.users.map(user => user.totalFollowers);
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

      // colors.forEach((color: string, index: number) =>  {gradient.addColorStop(index, color)})

      this.barChart = new Chart(ctx, {
        type: 'bar',
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
              hoverBorderWidth: 2
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: `Total ${this.label}`
              }
            },
            x: {
              grid: {
                display: true // Desactiva las líneas de la cuadrícula horizontal
              }
            }
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
          
                }
              }
            }
          }
        }
      });
      
    

    } else {
      console.error('No se pudo obtener el contexto del lienzo.');
    }
  }
}