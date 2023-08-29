import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
  users: any =[]
constructor(private dataService: DataService){




}
  ngOnInit(): void {
    this.dataService.getDummy().subscribe((res: any)=>{
      this.users = res
      console.log(this.users)
  })}

}
