import {
  Component, EventEmitter, OnDestroy, OnInit, Output,
} from '@angular/core';
import { takeUntil, Subject } from 'rxjs';
import AuthService from '../../services/auth.service';

@Component({
  selector: 'app-login-information',
  templateUrl: './login-information.component.html',
  styleUrls: ['./login-information.component.sass'],
})
export default class LoginInformationComponent implements OnInit, OnDestroy {
  @Output() isAuth: EventEmitter<boolean> = new EventEmitter();

  destroy$: Subject<boolean> = new Subject<boolean>();

  userName: string | undefined = undefined;

  auth = false;

  constructor(
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.authSubject()
      .pipe(takeUntil(this.destroy$))
      .subscribe((result) => {
        this.userName = result.username;
        this.auth = result.auth;
        this.isAuth.emit(this.auth);
      });

    this.authInfomation();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  logout() {
    this.authService.logout();
    this.userName = '';
  }

  authInfomation() {
    this.auth = this.authService.isAuthenticated().auth;
    this.userName = this.authService.isAuthenticated().username;
    this.isAuth.emit(this.auth);
  }
}
