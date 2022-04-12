import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import AuthService from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export default class LoginComponent implements OnInit {
  auth: boolean = false;

  formLogin!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.formLogin = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });

    this.isAuthenticated();
  }

  controls() {
    return this.formLogin.controls;
  }

  login() {
    if (this.formLogin.valid) {
      console.log(this.formLogin.value);
      this.authService.login(this.formLogin.value.login, this.formLogin.value.password);
    }
  }

  isAuthenticated() {
    this.auth = this.authService.isAuthenticated().auth;
  }
}
