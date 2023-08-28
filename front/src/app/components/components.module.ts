import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CanvaComponent } from './canva/canva.component';
import { SelectorComponent } from './selector-component/selector-component.component';
import { MatSelectModule } from '@angular/material/select';
import { DataService } from '../services/data.service';




@NgModule({
  declarations: [
    CanvaComponent,
    SelectorComponent,
  ],
  imports: [
    CommonModule,
  MatSelectModule
  //   LiveEventRoutingModule
  ],
  exports:[
    SelectorComponent,
    CanvaComponent
  ],
 
})
export class ComponentsModule { }
