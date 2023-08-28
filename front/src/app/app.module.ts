import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SelectorComponent } from './components/selector-component/selector-component.component';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule } from '@angular/common/http';


// import { TableViewComponent } from './components/table-view/table-view.component';
import { CanvaComponent } from './components/canva/canva.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // TableViewComponent,
    CanvaComponent
  ],
  imports: [
    // ComponentsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
