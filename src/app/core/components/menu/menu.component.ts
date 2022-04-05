import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export default class MenuComponent {
  status = false;

  toogleMenu(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (target.tagName === 'A') {
      this.status = false;
    }
  }
}
