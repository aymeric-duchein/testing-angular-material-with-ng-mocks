import { Component, Input } from '@angular/core';
import { NavListInfoService } from './nav-list.info.service';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.scss']
})
export class NavListComponent {

  info = '';

  @Input() links: { content: string; href: string }[] = [
    { content: 'Link 1', href: '/list/nav' },
    { content: 'Link 2', href: '/list/nav' },
    { content: 'Link 3', href: '/list/nav' },
  ];

  constructor(private navListInfoService: NavListInfoService) {}

  showInfo({ content }: { content: string}): void {
    this.info = this.navListInfoService.getInfo(content);
  }
}
