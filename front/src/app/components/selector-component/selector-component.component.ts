import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { NavigationEnd, Router } from '@angular/router';

import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-selector-component',
  templateUrl: './selector-component.component.html',
  styleUrls: ['./selector-component.component.scss']
})
export class SelectorComponent{
  selectedOption!: string
  options: { label: string; value: string }[] = [];

  constructor(private router: Router, private dataService: DataService) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
       this.updateOptions(event.url)
       this.selectedOption = this.options[0].value
       console.log(this.selectedOption)
      }
    });
 
  }

  optionSelected(event: MatSelectChange) {
    this.dataService.optionSubject.next(event.value);
    this.selectedOption = event.value
    
  }

  private updateOptions(segment: string) {
    if (segment === '/users') {
      this.options = [
        { label: 'Total Followers', value: '/users/top_followers/' },      
        { label: 'Premium Users', value: '/users/premiums/' }
      ];
    } else if (segment === '/live-events') {
      this.options = [
        { label: 'Price Max', value: 'price-max' }
      ];
    } else if (segment === '/posts') {
      this.options = [
        { label: 'Top Views', value: '/posts/top_views/' },
        { label: 'Top Likes', value: '/posts/top_likes/' },
        { label: 'Top Writers', value: '/posts/top_writers/' }
      ];
    }
   
  }
}

