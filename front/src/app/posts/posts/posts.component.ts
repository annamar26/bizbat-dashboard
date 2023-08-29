import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any =[]
  path?: string
constructor(private dataService: DataService){
  this.dataService.optionSubject.subscribe(path=> {

    this.path = path
    console.log('holi', this.path)
    this.getData()

  })




}
  ngOnInit(): void {
   this.dataService.optionSubject.next('/posts/top_views/')
  }

  getData(): void {

    
    this.dataService.getDummy(this.path!).subscribe((res: any)=>{
      this.posts = res
      console.log(this.posts)
  })}
  
}
