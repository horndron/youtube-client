import { Component } from '@angular/core';
import SortingService from 'src/app/shared/services/sorting.service';

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.sass'],
})
export default class SortingComponent {
  constructor(private sortingService: SortingService) {}

  sorting(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const sortField = target.dataset['sort'] as string;
    target.classList.toggle('desc');
    const sortAsc = !target.classList.contains('desc');

    this.sortingService.setSortFieldAndAsc(sortField, sortAsc);
  }

  byWordorting(input: HTMLInputElement): void {
    const value = input.value as string;
    this.sortingService.setFilterName(value);
  }
}
