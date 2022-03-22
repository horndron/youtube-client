import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCardDetailComponent } from './video-card-detail.component';

describe('VideoCardDetailComponent', () => {
  let component: VideoCardDetailComponent;
  let fixture: ComponentFixture<VideoCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
