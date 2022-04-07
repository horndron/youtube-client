import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import SearchService from 'src/app/core/services/search.service';
import SortingService from 'src/app/core/services/sorting.service';
import { SearchItem } from '../../models/video-card.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass'],
})
export default class SearchResultComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  searchResult: SearchItem[] = [];

  constructor(
    private searchService: SearchService,
    private sortingService: SortingService,
  ) {}

  ngOnInit() {
    this.searchService.searchResult$
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.searchResult = result;
      });

    this.sortingService.sorting$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.sortingOrFilteringResult());

    this.searchResult = this.searchService.result;
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  sortingOrFilteringResult(): void {
    if (this.sortingService.sortField) {
      this.searchResult = this.sortingService.sortSearchItem();
    }

    this.searchResult = this.sortingService.filterSearchItem();
  }
}