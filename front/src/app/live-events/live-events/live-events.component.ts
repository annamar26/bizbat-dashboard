import {Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-live-events',
  templateUrl: './live-events.component.html',
  styleUrls: ['./live-events.component.scss']
})
export class LiveEventsComponent implements OnInit {

  public listData: Array<object> = [];

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.listData = this._dataService.getData();
  }

}
