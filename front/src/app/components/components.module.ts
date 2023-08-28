import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvaComponent } from './canva/canva.component';



@NgModule({
  declarations: [
    CanvaComponent
  ],
  imports: [
    CommonModule,
  //   LiveEventRoutingModule
  ],
  exports:[
    CanvaComponent
  ]
})
export class ComponentsModule { }
