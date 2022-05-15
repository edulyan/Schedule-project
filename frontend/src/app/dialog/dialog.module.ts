import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { DialogComponent } from './dialog.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatCardModule,
  ],
  exports: [],
  declarations: [DialogComponent],
  providers: [],
})
export class DialogModule {}
