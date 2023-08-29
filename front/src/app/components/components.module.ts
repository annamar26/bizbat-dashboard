import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector-component/selector-component.component';
import { MatSelectModule } from '@angular/material/select';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NgChartsModule } from 'ng2-charts';




@NgModule({
  declarations: [
    SelectorComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule,
    NgChartsModule,

  //   LiveEventRoutingModule
  ],
  exports:[
    SelectorComponent,

    BarChartComponent
  ],

})
export class ComponentsModule { }
