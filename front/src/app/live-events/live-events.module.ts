import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveEventsComponent } from './live-events/live-events.component';
import { LiveEventRoutingModule } from './live-events.routes';
import { ComponentsModule } from '../components/components.module';
import { LiveEventService } from '../services/live-event-service';



@NgModule({
  declarations: [
    LiveEventsComponent
  ],
  imports: [
    CommonModule,
    LiveEventRoutingModule,
    ComponentsModule,
  ],
  providers: [
    LiveEventService
  ]
  // exports:[
  //   LiveEventsComponent
  // ]
})
export class LiveEventsModule { }
