import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../../youtube/models/video-card.model';

@Pipe({
  name: 'cardsFilter',
})
export default class CardsFilterPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(cards: SearchItem[], search: string): SearchItem[] {
    if (!search) return cards;
    return cards.filter(
      (card) => card.snippet.title.toLowerCase().includes(search.toLowerCase()),
    );
  }
}
