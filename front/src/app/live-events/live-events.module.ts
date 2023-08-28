import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveEventsComponent } from './live-events/live-events.component';
import { LiveEventRoutingModule } from './live-events.routes';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    LiveEventsComponent
  ],
  imports: [
    CommonModule,
    LiveEventRoutingModule,
    ComponentsModule,
  ],
  // exports:[
  //   LiveEventsComponent
  // ]
})
export class LiveEventsModule { }
