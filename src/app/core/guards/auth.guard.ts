/* eslint-disable no-console */
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of, switchMap } from 'rxjs';
import { userLoginSelector } from 'src/app/auth/ngrx-store/selector';

@Injectable({
  providedIn: 'root',
})
export default class AuthGuard implements CanActivate {
  constructor(
    private store: Store,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('route', route);
    console.log('state', state);

    return this.store.select(userLoginSelector)
      .pipe(
        switchMap((login) => (login ? of(true) : this.router.navigate(['user/login'], {}))),
      );
  }
}
