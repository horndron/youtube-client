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

  static generateToken(length: number): string {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
    const token = [];
    for (let i = 0; i < length; i += 1) {
      const j = Math.floor(Math.random() * (letters.length - 1));
      token[i] = letters[j] as string;
    }
    return token.join('');
  }

  login(username: string, password?: string): void {
    console.log('login', username);
    console.log('password', password);

    // this.http.post<void>(this.url, { username, password }, this.httpOptions)
    //   .subscribe(() => {
    localStorage.setItem('authToken', AuthService.generateToken(32));
    localStorage.setItem('login', username);
    this.isAuth = true;
    this.router.navigate(['/main'], {});
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
