import {
  Component, EventEmitter, OnDestroy, OnInit, Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { takeUntil, Subject } from 'rxjs';
import { userLoginSelector } from 'src/app/auth/ngrx-store/selector';
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
    private store: Store,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.store.select(userLoginSelector)
      .pipe(takeUntil(this.destroy$))
      .subscribe((login) => {
        this.userName = login;
        this.auth = !!login.length;
        this.isAuth.emit(this.auth);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  logout() {
    this.authService.logout();
  }
}
