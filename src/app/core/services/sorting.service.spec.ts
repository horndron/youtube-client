import { TestBed } from '@angular/core/testing';
import { SearchItem } from 'src/app/youtube/models/video-card.model';

import SortingService from './sorting.service';

describe('SortingService', () => {
  let service: SortingService;
  const searchItems = [
    { snippet: { publishedAt: '22-11-22', title: 'javascript' }, statistics: { viewCount: 10 } },
    { snippet: { publishedAt: '22-08-21', title: 'javascript2' }, statistics: { viewCount: 5 } },
    { snippet: { publishedAt: '25-03-20', title: 'angular' }, statistics: { viewCount: 30 } },
    { snippet: { publishedAt: '02-01-12', title: 'PHP' }, statistics: { viewCount: 15 } },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('setSortFieldAndAsc method', () => {
    const value = 'name';
    const asc = true;
    service.setSortFieldAndAsc(value, asc);

    expect(service.sortField).toBe(value);
    expect(service.asc).toBe(asc);
    service.sorting$.subscribe((res) => {
      expect(res).toBe(res);
    });
  });

  it('setFilterName method', () => {
    const value = 'view';
    service.setFilterName(value);

    expect(service.filterName).toBe(value);
    service.sorting$.subscribe((res) => {
      expect(res).toBe(res);
    });
  });

  it('sortSearchItem method publishedAt, asc = true', () => {
    service.asc = true;
    service.sortField = 'publishedAt';
    expect(service.sortSearchItem(searchItems as SearchItem[])).toBe(searchItems as SearchItem[]);
  });

  it('sortSearchItem method publishedAt, asc = false', () => {
    service.asc = false;
    service.sortField = 'publishedAt';
    expect(service.sortSearchItem(searchItems as SearchItem[])).toBe(searchItems as SearchItem[]);
  });

  it('sortSearchItem method viewCount, asc = true', () => {
    service.asc = true;
    service.sortField = 'viewCount';
    expect(service.sortSearchItem(searchItems as SearchItem[])).toBe(searchItems as SearchItem[]);
  });

  it('sortSearchItem method viewCount, asc = false', () => {
    service.asc = false;
    service.sortField = 'viewCount';
    expect(service.sortSearchItem(searchItems as SearchItem[])).toBe(searchItems as SearchItem[]);
  });

  it('sortSearchItem method return SearchItem[]', () => {
    expect(service.sortSearchItem(searchItems as SearchItem[])).toBe(searchItems as SearchItem[]);
  });
});
