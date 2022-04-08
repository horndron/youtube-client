import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export default class HeaderComponent {
  filters: boolean = false;

  viewFilters() {
    this.filters = !this.filters;
  }
}
