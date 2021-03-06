import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchItem } from '../../youtube/models/video-card.model';

enum Sorting {
  date = 'publishedAt',
  views = 'viewCount',
}

@Injectable({
  providedIn: 'root',
})
export default class SortingService {
  sortField = '';

  filterName = '';

  asc = true;

  sorting$ = new Subject<void>();

  setSortFieldAndAsc(value: string, asc: boolean): void {
    this.sortField = value;
    this.asc = asc;
    this.sorting$.next();
  }

  setFilterName(value: string): void {
    this.filterName = value;
    this.sorting$.next();
  }

  sortSearchItem(items: SearchItem[]): SearchItem[] {
    const searchResult = items;
    if (this.sortField === Sorting.date) {
      return this.asc
        ? searchResult.sort(
          (a, b) => SortingService.dateParse(a) - SortingService.dateParse(b),
        )
        : searchResult.sort(
          (a, b) => SortingService.dateParse(b) - SortingService.dateParse(a),
        );
    }
    if (this.sortField === Sorting.views) {
      return this.asc
        ? searchResult.sort(
          (a, b) => Number(a.statistics?.viewCount) - Number(b.statistics?.viewCount),
        )
        : searchResult.sort(
          (a, b) => Number(b.statistics?.viewCount) - Number(a.statistics?.viewCount),
        );
    }
    return searchResult;
  }

  filterSearchItem(items: SearchItem[]): SearchItem[] {
    const searchResult = items;

    return this.filterName.length > 0
      ? searchResult.filter(
        (item) => item.snippet.title.toLowerCase().includes(this.filterName.toLowerCase()),
      )
      : searchResult;
  }

  static dateParse(card: SearchItem): number {
    return Date.parse(card.snippet.publishedAt);
  }
}
