import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/video-card.model';
import SearchService from 'src/app/shared/services/search.service';
import SortingService from '../../shared/services/sorting.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass'],
})
export default class SearchResultComponent implements OnInit {
  searchResult: SearchItem[] = [];

  constructor(
    private searchService: SearchService,
    private sortingService: SortingService,
  ) {}

  ngOnInit() {
    this.searchService.searchResult$.subscribe((result) => {
      this.searchResult = result;
    });

    this.sortingService.sorting$.subscribe(() => this.sortingOrFilteringResult());
  }

  sortingOrFilteringResult(): void {
    if (this.sortingService.sortField) {
      this.searchResult = this.sortingService.sortSearchItem();
    }

    if (this.sortingService.filterName) {
      this.searchResult = this.sortingService.filterSearchItem();
    }
  }
}
