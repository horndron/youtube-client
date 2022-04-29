import { CustomCards } from '../core/models/customCards';
import { SearchResponse } from '../youtube/models/search-response.model';

export interface State {
  cards: CardsState,
}
export interface CardsState {
  youtube: SearchResponse | undefined;
  customCards: CustomCards[];
}
