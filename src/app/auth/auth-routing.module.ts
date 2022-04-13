import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AdminComponent from './pages/admin/admin.component';
import LoginComponent from './pages/login/login.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'admin', component: AdminComponent },
    ],
  },
  { path: '', redirectTo: 'login' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class AuthRoutingModule { }
