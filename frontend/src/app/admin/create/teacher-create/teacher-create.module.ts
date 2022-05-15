import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TeacherCreateComponent } from './teacher-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  exports: [
    TeacherCreateComponent,
    MatFormFieldModule,
    MatProgressBarModule,
    MatDialogModule,
  ],
  declarations: [TeacherCreateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
})
export class TeacherCreateModule {}
