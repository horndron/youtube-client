import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import SearchResultComponent from './youtube/pages/search-result/search-result.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'main', component: SearchResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export default class AppRoutingModule { }
