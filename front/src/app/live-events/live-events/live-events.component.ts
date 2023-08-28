import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LiveEventService } from 'src/app/services/live-event-service';

@Component({
  selector: 'app-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.scss']
})
export class LiveEventsComponent implements OnInit{

  public listData: Array<object> = [];

  constructor(private _liveEventsService: LiveEventService) {}

  ngOnInit() {
    this.listData = this._liveEventsService.getData();
  }

}
