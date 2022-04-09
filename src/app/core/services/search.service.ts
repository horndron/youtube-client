import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SearchResponse } from 'src/app/youtube/models/search-response.model';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  private urlAPI = 'https://www.googleapis.com/youtube/v3';

  private typeSearch = ['search', 'videos'];

  private type = 'video';

  private part: string[] = ['snippet', 'statistics'];

  private maxResults = 16;

  searchInputValue = '';

  result?: SearchResponse;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  searchResult$ = new Subject<SearchResponse>();

  constructor(
    private http: HttpClient,
  ) { }

  getSearchResult(search: string): void {
    this.http.get<SearchResponse>(
      `${this.urlAPI}/${this.typeSearch[0]}?type=${this.type}&part=${this.part[0]}&maxResults=${this.maxResults}&q=${search}`,
    )
      .subscribe((searchResult) => {
        this.searchInputValue = search;
        this.result = searchResult;
        this.searchResult$.next(searchResult);
      });
  }

  getDifferentPage(pageToken: string): void {
    this.http.get<SearchResponse>(
      `${this.urlAPI}/${this.typeSearch[0]}?type=${this.type}&part=${this.part[0]}&maxResults=${this.maxResults}&q=${this.searchInputValue}&pageToken=${pageToken}`,
    )
      .subscribe((searchResult) => {
        this.result = searchResult;
        this.searchResult$.next(searchResult);
      });
  }

  getItemFromSearchResult(id: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(
      `${this.urlAPI}/${this.typeSearch[1]}?id=${id}&part=${this.part[0]},${this.part[1]}`,
    );
  }
}
