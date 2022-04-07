import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import DatePublishingAgoDirective from './directives/date-publishing-ago.directive';

@NgModule({
  declarations: [
    DatePublishingAgoDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    DatePublishingAgoDirective,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export default class SharedModule { }
