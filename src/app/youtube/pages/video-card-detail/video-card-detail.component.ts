import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import SearchService from 'src/app/core/services/search.service';
import { SearchItem } from '../../models/video-card.model';

@Component({
  selector: 'app-video-card-detail',
  templateUrl: './video-card-detail.component.html',
  styleUrls: ['./video-card-detail.component.sass'],
})
export default class VideoCardDetailComponent implements OnInit, OnDestroy {
  card: SearchItem | undefined;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private searchService: SearchService,
  ) {}

  ngOnInit() {
    this.getCard();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  back() {
    this.location.back();
  }

  getCard(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.searchService.getItemFromSearchResult(id)
      .pipe(takeUntil(this.destroy$))
      .subscribe((results) => {
        [this.card] = results.items;
      });
  }
}
