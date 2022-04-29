import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthGuard from './core/guards/auth.guard';
import NotFoundErrorComponent from './core/pages/not-found-error/not-found-error.component';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./youtube/youtube.module').then((m) => m.default), canActivate: [AuthGuard],
  },
  { path: 'user', loadChildren: () => import('./auth/auth.module').then((m) => m.default) },
  { path: '**', component: NotFoundErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
