import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs';
import { userIsAuthenticated, userLogin } from './action';

@Injectable()
export default class AuthEffects {
  updatedAt$ = createEffect(() => this.actions$.pipe(
    ofType(userIsAuthenticated),
    map(() => {
      let savelogin = '';
      if (localStorage.getItem('login')) {
        savelogin = localStorage.getItem('login') as string;
      }
      return userLogin({ login: savelogin });
    }),
  ));

  constructor(
    private actions$: Actions,
  ) {}
}
