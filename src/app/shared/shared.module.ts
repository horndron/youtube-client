import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import DatePublishingAgoDirective from './directives/date-publishing-ago.directive';

@NgModule({
  declarations: [
    DatePublishingAgoDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DatePublishingAgoDirective,
    FormsModule,
    CommonModule,
  ],
})
export default class SharedModule { }
