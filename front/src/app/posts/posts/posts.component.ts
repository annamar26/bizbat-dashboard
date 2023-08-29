import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts: any =[]
  path?: string
constructor(private dataService: DataService){
  this.dataService.optionSubject.subscribe(path=> {

    this.path = path
    this.getData()

  })




}
  getData(): void {

    
    this.dataService.getDummy(this.path!).subscribe((res: any)=>{
      this.posts = res
      console.log(this.posts)
  })}
}
