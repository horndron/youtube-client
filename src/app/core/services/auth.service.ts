import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { AuthInfomation } from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  url = 'http://localhost:4200';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private authInfomation: AuthInfomation = {
    auth: false,
    username: undefined,
  };

  authSubject$ = new Subject<AuthInfomation>();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  static generateToken(): string {
    return Math.random().toString(16).substring(2, 10);
  }

  authSubject(): Observable<AuthInfomation> {
    return this.authSubject$.asObservable();
  }

  login(userName: string, password?: string): void {
    this.authInfomation = {
      auth: true,
      username: userName,
    };
    console.log(password);

    localStorage.setItem('authToken', AuthService.generateToken());
    localStorage.setItem('login', userName);
    this.router.navigate([''], {});
    this.authSubject$.next(this.authInfomation);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('login');
    this.authInfomation = {
      auth: false,
      username: undefined,
    };
    this.authSubject$.next(this.authInfomation);
    this.router.navigate(['user/login'], {});
  }

  isAuthenticated(): AuthInfomation {
    if (localStorage.getItem('login')) {
      this.authInfomation = {
        auth: true,
        username: localStorage.getItem('login') as string,
      };
    }

    return this.authInfomation;
  }
}
