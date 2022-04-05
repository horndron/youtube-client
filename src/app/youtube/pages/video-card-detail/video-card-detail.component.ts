import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SearchService from 'src/app/core/services/search.service';
import { SearchItem } from '../../models/video-card.model';

@Component({
  selector: 'app-video-card-detail',
  templateUrl: './video-card-detail.component.html',
  styleUrls: ['./video-card-detail.component.sass'],
})
export default class VideoCardDetailComponent implements OnInit {
  card: SearchItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private searchService: SearchService,
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.card = this.searchService.getItemFromSearchResult(id);
    console.log(this.card);
  }

  back() {
    this.location.back();
  }
}
