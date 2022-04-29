import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import DatePublishingAgoDirective from './directives/date-publishing-ago.directive';

@NgModule({
  declarations: [
    DatePublishingAgoDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    RouterModule,
    DatePublishingAgoDirective,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export default class SharedModule { }
