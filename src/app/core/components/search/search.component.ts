import { Component } from '@angular/core';
import SearchService from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export default class SearchComponent {
  constructor(private searchService: SearchService) {}

  searchSubmit(search: HTMLInputElement): void {
    const input = search;
    if (search.value) {
      this.searchService.getSearchResult(input.value);
      input.value = '';
    }
  }
}
