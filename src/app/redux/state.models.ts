import { UserState } from '../auth/ngrx-store/models';
import { CustomCards } from '../core/models/customCards';
import { SearchResponse } from '../youtube/models/search-response.model';

export interface State {
  cards: CardsState,
  user: UserState
}
export interface CardsState {
  youtube: SearchResponse | undefined;
  customCards: CustomCards[];
}
