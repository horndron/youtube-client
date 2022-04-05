import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import LoginComponent from './auth/pages/login/login.component';
import AuthGuard from './core/guards/auth.guard';
import NotFoundErrorComponent from './core/pages/not-found-error/not-found-error.component';
import SearchResultComponent from './youtube/pages/search-result/search-result.component';
import VideoCardDetailComponent from './youtube/pages/video-card-detail/video-card-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', component: SearchResultComponent, pathMatch: 'full', canActivate: [AuthGuard],
  },
  { path: 'video/:id', component: VideoCardDetailComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
