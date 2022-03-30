import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export default class HeaderComponent {
  @Output() viewFilters: EventEmitter<boolean> = new EventEmitter();

  toggleFiltersVisible() {
    this.viewFilters.emit();
  }
}
