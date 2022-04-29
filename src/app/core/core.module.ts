import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import LoginInformationComponent from './components/login-information/login-information.component';
import SearchComponent from './components/search/search.component';
import SortingComponent from './components/sorting/sorting.component';
import HeaderComponent from './components/header/header.component';
import SharedModule from '../shared/shared.module';
import FooterComponent from './components/footer/footer.component';
import MenuComponent from './components/menu/menu.component';
import NotFoundErrorComponent from './pages/not-found-error/not-found-error.component';
import HeaderContainerComponent from './components/header/header-container/header-container.component';
import YoutubeKeyInterceptor from './interceptors/youtube-key.interceptor';
import CardsFilterPipe from './pipes/cards-filter.pipe';
import CustomCardComponent from './components/custom-card/custom-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginInformationComponent,
    SearchComponent,
    SortingComponent,
    FooterComponent,
    MenuComponent,
    NotFoundErrorComponent,
    HeaderContainerComponent,
    CardsFilterPipe,
    CustomCardComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    LoginInformationComponent,
    SearchComponent,
    SortingComponent,
    FooterComponent,
    CardsFilterPipe,
    CustomCardComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: YoutubeKeyInterceptor,
      multi: true,
    },
  ],
})
export default class CoreModule { }
