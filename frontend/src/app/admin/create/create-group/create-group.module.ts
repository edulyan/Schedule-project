import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CreateGroupComponent } from './create-group.component';

@NgModule({
  exports: [CreateGroupComponent],
  declarations: [CreateGroupComponent],
  imports: [CommonModule, FormsModule, BrowserModule, AppRoutingModule],
  providers: [],
})
export class CreateGroupModule {}
