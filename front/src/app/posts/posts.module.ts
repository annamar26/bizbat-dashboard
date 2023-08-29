import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { PostsRoutingModule } from './posts.routes';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
