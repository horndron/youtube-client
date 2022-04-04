import { NgModule } from '@angular/core';
import VideoCardStatisticComponent from './components/video-card-statistic/video-card-statistic.component';
import VideoCardDetailComponent from './pages/video-card-detail/video-card-detail.component';
import VideoCardComponent from './pages/search-result/video-card/video-card.component';
import SearchResultComponent from './pages/search-result/search-result.component';
import CoreModule from '../core/core.module';
import SharedModule from '../shared/shared.module';

@NgModule({
  declarations: [
    SearchResultComponent,
    VideoCardComponent,
    VideoCardStatisticComponent,
    VideoCardDetailComponent,
  ],
  imports: [
    SharedModule,
    CoreModule,
  ],
})
export default class YoutubeModule { }
