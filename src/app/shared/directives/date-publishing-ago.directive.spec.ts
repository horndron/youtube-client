import { TestBed } from '@angular/core/testing';
import DatePublishingAgoDirective from './date-publishing-ago.directive';

describe('DatePublishingAgoDirective', () => {
  let directive: DatePublishingAgoDirective;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DatePublishingAgoDirective,
      ],
    });
    directive = TestBed.inject(DatePublishingAgoDirective);
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });
});
