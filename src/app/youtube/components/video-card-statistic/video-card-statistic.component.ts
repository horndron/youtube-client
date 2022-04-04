import { Component, Input } from '@angular/core';
import { Statistics } from '../../models/video-card.model';

@Component({
  selector: 'app-video-card-statistic',
  templateUrl: './video-card-statistic.component.html',
  styleUrls: ['./video-card-statistic.component.sass'],
})
export default class VideoCardStatisticComponent {
  @Input() statistics!: Statistics;
}
