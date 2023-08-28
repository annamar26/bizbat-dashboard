import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { TableViewComponent } from '../components/table-view/bar-chart.component';
import { UsersRoutingModule } from './users.routes';



@NgModule({
  declarations: [
    UsersComponent,
    TableViewComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
