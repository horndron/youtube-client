import { ComponentFixture, TestBed } from '@angular/core/testing';

import VideoCardStatisticComponent from './video-card-statistic.component';

describe('VideoCardStatisticComponent', () => {
  let component: VideoCardStatisticComponent;
  let fixture: ComponentFixture<VideoCardStatisticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoCardStatisticComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCardStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
