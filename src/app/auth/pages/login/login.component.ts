import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import AuthService from 'src/app/core/services/auth.service';
import { userLoginSelector } from '../../ngrx-store/selector';
import isSecurePassword from '../../validators/isSecurePassword';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export default class LoginComponent implements OnInit, OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  auth: boolean = false;

  formLogin!: FormGroup;

  constructor(
    private store: Store,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      login: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), isSecurePassword]),
    });

    this.store.select(userLoginSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe((login) => {
        this.auth = login != null && !!login.length;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  get login() { return this.formLogin.get('login'); }

  get password() { return this.formLogin.get('password'); }

  loginFormSubmit() {
    if (this.formLogin.valid) {
      this.authService.login(this.formLogin.value.login, this.formLogin.value.password);
    }
  }
}
