import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardsState } from '../state.models';

export const cardsFeatureSelector = createFeatureSelector<CardsState>('cards');

export const youtubeCardsSelector = createSelector(
  cardsFeatureSelector,
  (state) => state.youtube,
);

export const customCardsSelector = createSelector(
  cardsFeatureSelector,
  (state) => state.customCards,
);

export default cardsFeatureSelector;
