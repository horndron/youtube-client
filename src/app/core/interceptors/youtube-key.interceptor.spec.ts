import { TestBed } from '@angular/core/testing';

import { YoutubeKeyInterceptor } from './youtube-key.interceptor';

describe('YoutubeKeyInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      YoutubeKeyInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: YoutubeKeyInterceptor = TestBed.inject(YoutubeKeyInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
