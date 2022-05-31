import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { LessonUpdateComponent } from './lesson-update.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [
    LessonUpdateComponent,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
  declarations: [LessonUpdateComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
  ],
})
export class LessonUpdateModule {}
