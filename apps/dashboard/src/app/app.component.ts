import { Component } from '@angular/core';
import { Header } from '@monorepo-lib/my-component-lib';

@Component({
  selector: 'host-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dashboard';
  links: Array<Header> = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Product',
      url: 'product',
    },
  ];
}
