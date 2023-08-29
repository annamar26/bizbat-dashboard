import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorComponent } from './selector-component/selector-component.component';
import { MatSelectModule } from '@angular/material/select';
import { BarChartComponent } from './bar-chart/bar-chart.component';




@NgModule({
  declarations: [

    SelectorComponent,
    BarChartComponent
  ],
  imports: [
    CommonModule,
    MatSelectModule
  //   LiveEventRoutingModule
  ],
  exports:[
    SelectorComponent,

    BarChartComponent
  ],

})
export class ComponentsModule { }
