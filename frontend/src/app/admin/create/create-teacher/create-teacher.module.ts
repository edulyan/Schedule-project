import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CreateTeacherComponent } from './create-teacher.component';

@NgModule({
  exports: [CreateTeacherComponent],
  declarations: [CreateTeacherComponent],
  imports: [BrowserModule, CommonModule, FormsModule, AppRoutingModule],
  providers: [],
})
export class CreateTeacherModule {}
