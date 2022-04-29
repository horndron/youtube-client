import { createAction, props } from '@ngrx/store';

export const userLogin = createAction(
  '[USER] Login',
  props<{ login: string }>(),
);

export const userIsAuthenticated = createAction('[USER] isAuthenticated');

export const userLogout = createAction('[USER] Logout');

export default userLogin;
