import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './models';
import { authFeatureKey } from './reducer';

export const userFetureSelector = createFeatureSelector<UserState>(authFeatureKey);

export const userLoginSelector = createSelector(
  userFetureSelector,
  (state: UserState) => state?.login,
);

export default userFetureSelector;
