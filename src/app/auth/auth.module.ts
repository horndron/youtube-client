import { NgModule } from '@angular/core';
import LoginComponent from './pages/login/login.component';
import SharedModule from '../shared/shared.module';
import AuthRoutingModule from './auth-routing.module';
import AdminComponent from './pages/admin/admin.component';

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
  ],
  exports: [
    LoginComponent,
  ],
})
export default class AuthModule { }
