import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login-information.component.html',
  styleUrls: ['./login-information.component.sass'],
})
export default class LoginInformationComponent {
  userName = '';

  login() {
    alert(`${this.userName} Is login form in future`);
  }
}
