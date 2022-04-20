import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import LoginComponent from './pages/login/login.component';
import SharedModule from '../shared/shared.module';
import AuthRoutingModule from './auth-routing.module';
import AdminComponent from './pages/admin/admin.component';
import * as authFeature from './ngrx-store/reducer';

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature(authFeature.authFeatureKey, authFeature.userReducer),
  ],
  exports: [
    LoginComponent,
  ],
})
export default class AuthModule { }
