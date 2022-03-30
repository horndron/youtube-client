import { Component } from '@angular/core';
import SearchService from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export default class SearchComponent {
  constructor(private searchService: SearchService) {}

  searchSubmit(search: string): void {
    if (search) {
      this.searchService.getSearchResult(search);
    }
  }
}
