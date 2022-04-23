import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './models';
import { authFeatureKey } from './reduser';

export const userFetureSelector = createFeatureSelector<UserState>(authFeatureKey);

export const userLoginSelector = createSelector(
  userFetureSelector,
  (state: UserState) => state?.login,
);

export default userFetureSelector;
