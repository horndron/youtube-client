import { NgModule } from '@angular/core';
import LoginInformationComponent from './components/login-information/login-information.component';
import SearchComponent from './components/search/search.component';
import SortingComponent from './components/sorting/sorting.component';
import HeaderComponent from './components/header/header.component';
import SharedModule from '../shared/shared.module';
import FooterComponent from './components/footer/footer.component';
import MenuComponent from './components/menu/menu.component';
import NotFoundErrorComponent from './pages/not-found-error/not-found-error.component';
import HeaderContainerComponent from './components/header/header-container/header-container.component';

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
  ],
})
export default class CoreModule { }
