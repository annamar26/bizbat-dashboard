import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveEventsComponent } from './live-events/live-events.component';
import { LiveEventRoutingModule } from './live-events.routes';



@NgModule({
  declarations: [
    LiveEventsComponent
  ],
  imports: [
    CommonModule,
    LiveEventRoutingModule
  ],
  // exports:[
  //   LiveEventsComponent
  // ]
})
export class LiveEventsModule { }
