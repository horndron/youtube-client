import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import DatePublishingAgoDirective from './directives/date-publishing-ago.directive';
import AppRoutingModule from '../app-routing.module';

@NgModule({
  declarations: [
    DatePublishingAgoDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  exports: [
    DatePublishingAgoDirective,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
})
export default class SharedModule { }
