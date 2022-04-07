import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export default class AuthService {
  url = 'http://localhost:4200';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  isAuth = false;

  authSubject$ = new Subject<string>();

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  static generateToken(): string {
    return Math.random().toString(16).substring(2, 10);
  }

  login(username: string, password?: string): void {
    console.log('login', username);
    console.log('password', password);

    // this.http.post<void>(this.url, { username, password }, this.httpOptions)
    //   .subscribe(() => {
    localStorage.setItem('authToken', AuthService.generateToken());
    localStorage.setItem('login', username);
    this.isAuth = true;
    this.router.navigate([''], {});
    this.authSubject$.next(username);
    // });
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('login');
    this.isAuth = false;
    this.router.navigate(['/login'], {});
  }

  isAuthenticated(): boolean {
    if (localStorage.getItem('authToken')) {
      this.isAuth = true;
    }

    return this.isAuth;
  }
}
