import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  Observable, Subject, switchMap,
} from 'rxjs';
import { searchRequestVideo } from 'src/app/redux/actions/cards';
import { SearchResponse, StatisticsResponse } from 'src/app/youtube/models/search-response.model';
import { SearchItem } from 'src/app/youtube/models/video-card.model';

@Injectable({
  providedIn: 'root',
})
export default class SearchService {
  private urlAPI = 'https://www.googleapis.com/youtube/v3';

  private typeSearch = ['search', 'videos'];

  private type = 'video';

  private part: string[] = ['snippet', 'statistics'];

  private maxResults = 12;

  searchInputValue = '';

  result?: SearchResponse;

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  searchResult$ = new Subject<SearchResponse>();

  constructor(
    private http: HttpClient,
    private store: Store,
  ) { }

  getSearchResult(search: string): void {
    let searchRequest: SearchResponse;
    const searchId: string[] = [];

    this.http.get<SearchResponse>(
      `${this.urlAPI}/${this.typeSearch[0]}?type=${this.type}&part=${this.part[0]}&maxResults=${this.maxResults}&q=${search}`,
    )
      .pipe(
        switchMap((response: SearchResponse) => {
          searchRequest = response;
          searchRequest.items.forEach((card: SearchItem) => {
            searchId.push(card.id.videoId);
          });
          return this.http.get<StatisticsResponse>(
            `${this.urlAPI}/${this.typeSearch[1]}?id=${searchId.toString()}&part=${this.part[1]}`,
          );
        }),
      )
      .subscribe((statisticsRequest: StatisticsResponse) => {
        this.searchInputValue = search;
        const requestResult = searchRequest;

        if (searchRequest && statisticsRequest) {
          const searchRequestItems = searchRequest.items.map((card) => {
            const cardItem = card;
            const statistics = statisticsRequest.items
              .find((item) => item.id === cardItem.id.videoId)?.statistics;
            cardItem.statistics = statistics;
            return cardItem;
          });
          (requestResult as SearchResponse).items = searchRequestItems;
        }
        this.store.dispatch(searchRequestVideo({ youtube: requestResult }));
      });
  }

  getDifferentPage(pageToken: string): void {
    this.http.get<SearchResponse>(
      `${this.urlAPI}/${this.typeSearch[0]}?type=${this.type}&part=${this.part[0]}&maxResults=${this.maxResults}&q=${this.searchInputValue}&pageToken=${pageToken}`,
    )
      .subscribe((searchResult) => {
        this.store.dispatch(searchRequestVideo({ youtube: searchResult }));
        this.searchResult$.next(searchResult);
      });
  }

  getItemFromSearchResult(id: string): Observable<SearchResponse> {
    return this.http.get<SearchResponse>(
      `${this.urlAPI}/${this.typeSearch[1]}?id=${id}&part=${this.part[0]},${this.part[1]}`,
    );
  }
}
