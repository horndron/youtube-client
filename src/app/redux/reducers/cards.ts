import { createReducer, on } from '@ngrx/store';
import { searchRequestVideo } from '../actions/cards';
import { CardsState } from '../state.models';

export const initialState: CardsState = {
  youtube: undefined,
  customCards: [],
};

export const cardsReducer = createReducer(
  initialState,
  on(searchRequestVideo, (state, action): CardsState => ({
    ...state,
    youtube: action.youtube,
  })),
);
