import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  debounceTime, Subject, takeUntil,
} from 'rxjs';
import SearchService from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.sass'],
})
export default class SearchComponent implements OnInit, OnDestroy {
  searchSubject$ = new Subject<string>();

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchSubject$
      .pipe(
        debounceTime(700),
        takeUntil(this.destroy$),
      )
      .subscribe((search) => {
        this.searchService.getSearchResult(search);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  searchSubmit(search: HTMLInputElement): void {
    if (search.value.length >= 3) {
      this.searchSubject$.next(search.value);
    }
  }
}
