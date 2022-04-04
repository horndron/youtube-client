import { Component } from '@angular/core';
// import { SearchItem } from './models/video-card.model';
// import SearchService from './shared/services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export default class AppComponent {
  filters: boolean = false;

  // searchResult: SearchItem[] = [];

  // constructor(private searchService: SearchService) { }

  viewFilters() {
    this.filters = !this.filters;
  }
}
