import { SearchItem, Statistics } from './video-card.model';

export interface SearchResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  prevPageToken: string;
  regionCode: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: SearchItem[];
}

export interface StatisticsResponseItem {
  kind: string;
  etag: string;
  id: string;
  statistics: Statistics
}

export interface StatisticsResponse {
  kind: string;
  etag: string;
  items: StatisticsResponseItem[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}
