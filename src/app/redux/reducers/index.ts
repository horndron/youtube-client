import {
  ActionReducerMap,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { State } from '../state.models';
import { cardsReducer } from './cards';
import { userReducer } from '../../auth/ngrx-store/reduser';

export const reducers: ActionReducerMap<State> = {
  cards: cardsReducer,
  user: userReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
