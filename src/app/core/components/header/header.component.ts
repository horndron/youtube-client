import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { userIsAuthenticated } from 'src/app/auth/ngrx-store/action';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export default class HeaderComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  filters: boolean = false;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(userIsAuthenticated());
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  viewFilters() {
    this.filters = !this.filters;
  }
}
