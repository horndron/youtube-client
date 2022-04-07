import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import AuthGuard from './core/guards/auth.guard';
import NotFoundErrorComponent from './core/pages/not-found-error/not-found-error.component';
import VideoCardDetailComponent from './youtube/pages/video-card-detail/video-card-detail.component';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./auth/auth.module').then((m) => m.default) },
  {
    path: '', loadChildren: () => import('./youtube/youtube.module').then((m) => m.default), canActivate: [AuthGuard],
  },
  { path: 'video/:id', component: VideoCardDetailComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
