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

  prevPageToken: string | undefined = undefined;

  nextPageToken: string | undefined = undefined;

  constructor(
    private searchService: SearchService,
    private sortingService: SortingService,
  ) {}

  ngOnInit() {
    this.searchService.searchResult$
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.searchResult = result.items;
        this.prevPageToken = result.prevPageToken;
        this.nextPageToken = result.nextPageToken;
      });

    this.sortingService.sorting$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.sortingOrFilteringResult());

    if (this.searchService.result) {
      this.searchResult = this.searchService.result.items;
      this.prevPageToken = this.searchService.result.prevPageToken;
      this.nextPageToken = this.searchService.result.nextPageToken;
    }
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

  prevPageResult(): void {
    this.searchService.getDifferentPage(this.prevPageToken as string);
  }

  nextPageResult(): void {
    this.searchService.getDifferentPage(this.nextPageToken as string);
  }
}
