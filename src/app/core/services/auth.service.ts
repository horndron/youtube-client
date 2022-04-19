import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import userLogin, { userLogout } from 'src/app/auth/ngrx-store/action';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  url = 'http://localhost:4200';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private store: Store,
    private router: Router,
  ) {}

  static generateToken(): string {
    return Math.random().toString(16).substring(2, 10);
  }

  login(userName: string, password?: string): void {
    console.log(password);
    this.store.dispatch(userLogin({ login: userName }));
    localStorage.setItem('authToken', AuthService.generateToken());
    localStorage.setItem('login', userName);
    this.router.navigate([''], {});
  }

  logout(): void {
    this.store.dispatch(userLogout());
    localStorage.removeItem('authToken');
    localStorage.removeItem('login');
    this.router.navigate(['user/login'], {});
  }
}
