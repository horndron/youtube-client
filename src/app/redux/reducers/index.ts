import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { State } from '../state.models';
import { cardsReducer } from './cards';

export const reducers: ActionReducerMap<State> = {
  cards: cardsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
