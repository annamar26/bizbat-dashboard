import { Component } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-selector-component',
  templateUrl: './selector-component.component.html',
  styleUrls: ['./selector-component.component.scss']
})
export class SelectorComponent{
  selectedOption!: string
  options: { label: string; value: string }[] = [];

  private optionSubject = new BehaviorSubject<string>('');

  constructor(private router: Router) {

    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
       this.updateOptions(event.url)
       this.selectedOption = this.options[0].value
      }
    });
 
  }

  optionSelected(event: MatSelectChange) {
    this.optionSubject.next(event.value);
    this.selectedOption = event.value
  }

  private updateOptions(segment: string) {
    if (segment === '/users') {
      this.options = [
        { label: 'Total Followers', value: 'total-followers' },
        { label: 'Profile Types', value: 'profile-types' },
        { label: 'Language', value: 'language' },
        { label: 'Premium Users', value: 'premium-users' }
      ];
    } else if (segment === '/live-events') {
      this.options = [
        { label: 'Price Max', value: 'price-max' }
      ];
    } else if (segment === '/posts') {
      this.options = [
        { label: 'Top Views', value: 'top-views' },
        { label: 'Top Likes', value: 'top-likes' },
        { label: 'Top Writers', value: 'top-writers' }
      ];
    }
  }
}

