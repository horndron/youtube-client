import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/video-card.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.sass'],
})
export default class VideoCardComponent {
  @Input() card!: SearchItem;

  urlYouTube = 'https://youtu.be';

  getCurrentVideoUrl(): string {
    return `${this.urlYouTube}/${this.card.id}`;
  }
}
