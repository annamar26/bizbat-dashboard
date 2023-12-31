import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent{
  users: any =[]
  path?: string
constructor(private dataService: DataService){
  this.dataService.optionSubject.subscribe(path=> {

    this.path = path
    this.getData()

  })




}
  getData(): void {

    
    this.dataService.getDummy(this.path!).subscribe((res: any)=>{
      this.users = res
      console.log(this.users)
  })}

}
