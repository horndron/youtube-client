import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './models';

export const userFetureSelector = createFeatureSelector<UserState>('user');

export const userLoginSelector = createSelector(
  userFetureSelector,
  (state: UserState) => state.login,
);

export default userFetureSelector;
