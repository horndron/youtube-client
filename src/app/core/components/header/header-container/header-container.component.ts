import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header-container',
  templateUrl: './header-container.component.html',
  styleUrls: ['./header-container.component.sass'],
})
export default class HeaderContainerComponent {
  @Output() viewFilters: EventEmitter<boolean> = new EventEmitter();

  auth = false;

  toggleFiltersVisible() {
    this.viewFilters.emit();
  }

  isAuthenticated(auth: boolean) {
    this.auth = auth;
  }
}
