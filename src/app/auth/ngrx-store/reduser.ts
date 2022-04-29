import { createReducer, on } from '@ngrx/store';
import { userLogout, userLogin } from './action';
import { UserState } from './models';

export const authFeatureKey = 'authFeatureKey';

export const initialState: UserState = {
  login: '',
};

export const userReducer = createReducer(
  initialState,
  on(userLogin, (state: UserState, action): UserState => ({
    ...state,
    login: action.login,
  })),
  on(userLogout, (state: UserState): UserState => ({
    ...state,
    login: '',
  })),
);

export default userReducer;
