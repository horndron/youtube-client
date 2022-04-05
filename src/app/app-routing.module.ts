import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LoginComponent from './auth/pages/login/login.component';
import AuthGuard from './core/guards/auth.guard';
import NotFoundErrorComponent from './core/pages/not-found-error/not-found-error.component';
import SearchResultComponent from './youtube/pages/search-result/search-result.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    component: SearchResultComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '', redirectTo: 'main', pathMatch: 'full',
  },
  { path: '**', component: NotFoundErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
