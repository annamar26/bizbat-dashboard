import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public sections = [
    {
      value: 'Users',
      label: 'users',
    },
    {
      value: 'Live events',
      label: 'live-events',
    },
    {
      value: 'Posts',
      label: 'posts',
    },
    {
      value: 'Devices',
      label: 'devices',
    },
  ];
}
