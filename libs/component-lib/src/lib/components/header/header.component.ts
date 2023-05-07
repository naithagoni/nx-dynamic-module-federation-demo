import { Component, Input } from '@angular/core';
import { Header } from '../../shared/interfaces/header';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input()
  links: Array<Header> = [];
}
