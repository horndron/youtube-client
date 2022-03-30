import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchItem } from 'src/app/models/video-card.model';
import { SearchResponse } from '../../models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  private urlAPI = 'https://raw.githubusercontent.com/horndron/image-data/master/response.json';

  result: SearchItem[] = [];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  searchResult$ = new Subject<SearchItem[]>();

  constructor(
    private http: HttpClient,
  ) { }

  getSearchResult(search: string): void {
    console.log(search);
    this.http.get<SearchResponse>(this.urlAPI)
      .subscribe((searchResult) => {
        this.result = searchResult.items;
        this.searchResult$.next(searchResult.items);
      });
  }
}
