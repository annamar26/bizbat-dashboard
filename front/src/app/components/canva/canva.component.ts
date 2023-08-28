import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart, { ChartTypeRegistry } from 'chart.js/auto';
@Component({
  selector: 'app-canva',
  templateUrl: './canva.component.html',
  styleUrls: ['./canva.component.scss']
})
export class CanvaComponent implements OnInit, AfterViewInit{
  @Input() dataSet: Array<Object> = [];
  @Input() typeChart: any = "bar";

  canvas: any;
  ctx: any;
  @ViewChild('acquisitions') pieCanvas!: { nativeElement: any };
  pieChart: any;

  constructor() {}
  ngAfterViewInit(): void {
    this.renderChart();
  }

  ngOnInit() { }

  public renderChart(){
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(
      this.ctx,
      {
        type: this.typeChart, // 'doughnut',
        data: {
          labels: this.dataSet.map((row: any) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: this.dataSet.map((row: any) => row.count),
              borderColor: '#20269E',
              backgroundColor: ['#E5399D', '#6742F5', '#20269E', '#0E0821'],
            }
          ]
        }
      }
    );
  }
}
