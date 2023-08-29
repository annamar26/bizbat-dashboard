import {Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.scss']
})
export class LiveEventsComponent {

  public listData: Array<object> = [];
  liveEvents: any = [];
  path?: string;

  constructor(private _dataService: DataService) {
    this._dataService.liveEventsSubject.subscribe(path => {
      this.path = path;
      this.getData();
    })
  }

  getData(): void {
    this._dataService.getDummy(this.path!).subscribe((res: any)=>{
      this.liveEvents = res
      console.log(this.liveEvents)
  })}


}
