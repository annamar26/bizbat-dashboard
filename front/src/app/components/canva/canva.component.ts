import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-canva',
  templateUrl: './canva.component.html',
  styleUrls: ['./canva.component.scss']
})
export class CanvaComponent implements OnInit, AfterViewInit{
  canvas: any;
  ctx: any;
  @ViewChild('acquisitions') pieCanvas!: { nativeElement: any };
  pieChart: any;

  constructor() {}
  ngAfterViewInit(): void {
    this.renderChart();
  }

  ngOnInit() {
    console.log("test...");
  }

  public renderChart(){
    this.canvas = this.pieCanvas.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    const data = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 25 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    new Chart(
      // document.getElementById('acquisitions'),
      this.ctx,
      {
        type: 'bar',
        data: {
          labels: data.map(row => row.year),
          datasets: [
            {
              label: 'Acquisitions by year',
              data: data.map(row => row.count)
            }
          ]
        }
      }
    );
  }
}
