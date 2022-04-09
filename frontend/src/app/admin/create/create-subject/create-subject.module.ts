import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CreateSubjectComponent } from './create-subject.component';

@NgModule({
  exports: [CreateSubjectComponent],
  declarations: [CreateSubjectComponent],
  imports: [BrowserModule, CommonModule, FormsModule, AppRoutingModule],
  providers: [],
})
export class CreateSubjectModule {}
