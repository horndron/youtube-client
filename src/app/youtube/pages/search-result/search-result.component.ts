import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import SearchService from 'src/app/core/services/search.service';
import SortingService from 'src/app/core/services/sorting.service';
import { Store } from '@ngrx/store';
import { customCardsSelector, youtubeCardsSelector } from 'src/app/redux/selectors/cards';
import { CustomCards } from 'src/app/core/models/customCards';
import { SearchItem } from '../../models/video-card.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass'],
})
export default class SearchResultComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  viewCustomCards = false;

  searchFilter = '';

  searchResult: SearchItem[] = [];

  customCards: CustomCards[] = [];

  prevPageToken: string | undefined = undefined;

  nextPageToken: string | undefined = undefined;

  constructor(
    private store: Store,
    private sortingService: SortingService,
    private searchService: SearchService,
  ) {}

  ngOnInit() {
    this.store.select(youtubeCardsSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe((cards) => {
        if (cards) {
          this.searchResult = cards.items ? cards.items : [];
          this.prevPageToken = cards.prevPageToken ? cards.prevPageToken : undefined;
          this.nextPageToken = cards.nextPageToken ? cards.nextPageToken : undefined;
        }
      });

    this.store.select(customCardsSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe((cards) => {
        if (cards) {
          this.customCards = cards.length ? cards : [];
        }
      });

    this.sortingService.sorting$
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.searchFilter = this.sortingService.filterName;
        this.sortingOrFilteringResult();
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  sortingOrFilteringResult(): void {
    if (this.sortingService.sortField) {
      this.searchResult = this.sortingService.sortSearchItem([...this.searchResult]);
    }
  }

  prevPageResult(): void {
    this.searchService.getDifferentPage(this.prevPageToken as string);
  }

  nextPageResult(): void {
    this.searchService.getDifferentPage(this.nextPageToken as string);
  }
}
