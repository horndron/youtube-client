import {
  Component, EventEmitter, Input, Output,
} from '@angular/core';
import { SearchItem } from 'src/app/models/video-card.model';

// enum Sorting {
//   date = 'publishedAt',
//   views = 'viewCount',
// }

@Component({
  selector: 'app-sorting',
  templateUrl: './sorting.component.html',
  styleUrls: ['./sorting.component.sass'],
})
export default class SortingComponent {
  @Input() basicCards: SearchItem[] = [];

  @Output() sortedCards: EventEmitter<SearchItem[]> = new EventEmitter();

  // eslint-disable-next-line class-methods-use-this
  byWordorting(result: string) {
    console.log(result);
  }
}
