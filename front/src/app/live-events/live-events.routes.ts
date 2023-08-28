import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LiveEventsComponent } from './live-events/live-events.component';

const routes: Routes = [
  {path: '', component :  LiveEventsComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LiveEventRoutingModule { }
