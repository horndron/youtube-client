import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/models/video-card.model';
import SearchService from 'src/app/shared/services/search.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.sass'],
})
export default class SearchResultComponent implements OnInit {
  searchResult: SearchItem[] = [];

  constructor(private searchService: SearchService) {}

  ngOnInit() {
    this.searchService.searchResult$.subscribe((result) => {
      this.searchResult = result;
    });
  }
}
