import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import VideoCardStatisticComponent from './components/video-card-statistic/video-card-statistic.component';
import VideoCardDetailComponent from './components/video-card-detail/video-card-detail.component';
import VideoCardComponent from './components/video-card/video-card.component';
import SearchResultComponent from './components/search-result/search-result.component';
import SearchComponent from './components/search/search.component';
import LoginComponent from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoCardStatisticComponent,
    VideoCardDetailComponent,
    VideoCardComponent,
    SearchResultComponent,
    SearchComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
