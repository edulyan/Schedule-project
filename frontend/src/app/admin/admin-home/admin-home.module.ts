import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminHomeComponent } from './admin-home.component';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  exports: [AdminHomeComponent],
  declarations: [AdminHomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  providers: [],
})
export class AdminHomeModule {}
