import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
constructor(private dataService: DataService){
this.dataService.getDummy().subscribe(res=>{
  console.log(res)
})
}
}
