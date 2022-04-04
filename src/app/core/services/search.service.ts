import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchResponse } from 'src/app/youtube/models/search-response.model';
import { SearchItem } from 'src/app/youtube/models/video-card.model';

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
