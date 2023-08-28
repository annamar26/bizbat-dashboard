import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-canva',
  templateUrl: './canva.component.html',
  styleUrls: ['./canva.component.scss']
})
export class CanvaComponent implements OnInit, AfterViewInit{
  @Input() dataSet: Array<Object> = [];

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
        type: 'doughnut',
        data: {
          labels: this.dataSet.map((row: any) => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: this.dataSet.map((row: any) => row.count)
            }
          ]
        }
      }
    );
  }
}
