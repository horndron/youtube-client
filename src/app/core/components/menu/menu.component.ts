import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export default class MenuComponent {
  @Input() auth: boolean = false;

  status = false;

  toogleMenu(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A') {
      this.status = false;
    }
  }
}
