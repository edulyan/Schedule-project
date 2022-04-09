import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CreateStudentComponent } from './create-student.component';

@NgModule({
  exports: [CreateStudentComponent],
  declarations: [CreateStudentComponent],
  imports: [CommonModule, FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
})
export class CreateStudentModule {}
