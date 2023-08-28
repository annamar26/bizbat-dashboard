import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TableViewComponent } from './components/table-view/table-view.component';
import { CanvaComponent } from './components/canva/canva.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TableViewComponent,
    CanvaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
