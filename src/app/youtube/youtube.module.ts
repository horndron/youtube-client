import { NgModule } from '@angular/core';
import VideoCardStatisticComponent from './components/video-card-statistic/video-card-statistic.component';
import VideoCardDetailComponent from './pages/video-card-detail/video-card-detail.component';
import VideoCardComponent from './components/video-card/video-card.component';
import SearchResultComponent from './pages/search-result/search-result.component';
import SharedModule from '../shared/shared.module';
import YoutubeRoutingModule from './youtube-routing.module';
import CoreModule from '../core/core.module';

@NgModule({
  declarations: [
    SearchResultComponent,
    VideoCardComponent,
    VideoCardStatisticComponent,
    VideoCardDetailComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    YoutubeRoutingModule,
  ],
})
export default class YoutubeModule { }
