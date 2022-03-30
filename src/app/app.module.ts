import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import AppRoutingModule from './app-routing.module';
import AppComponent from './app.component';
import HeaderComponent from './components/header/header.component';
import VideoCardStatisticComponent from './components/video-card-statistic/video-card-statistic.component';
import VideoCardDetailComponent from './components/video-card-detail/video-card-detail.component';
import VideoCardComponent from './components/search-result/video-card/video-card.component';
import SearchResultComponent from './components/search-result/search-result.component';
import SearchComponent from './components/header/search/search.component';
import LoginInformationComponent from './components/header/login-information/login-information.component';
import DatePublishingAgoDirective from './shared/directives/date-publishing-ago.directive';
import SortingComponent from './components/sorting/sorting.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VideoCardStatisticComponent,
    VideoCardDetailComponent,
    VideoCardComponent,
    SearchResultComponent,
    SearchComponent,
    LoginInformationComponent,
    DatePublishingAgoDirective,
    SortingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export default class AppModule { }
