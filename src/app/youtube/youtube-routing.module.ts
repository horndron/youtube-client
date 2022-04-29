import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import SearchResultComponent from './pages/search-result/search-result.component';
import VideoCardDetailComponent from './pages/video-card-detail/video-card-detail.component';

const routes: Routes = [
  {
    path: '', component: SearchResultComponent, pathMatch: 'full',
  },
  { path: 'video/:id', component: VideoCardDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export default class YoutubeRoutingModule { }
