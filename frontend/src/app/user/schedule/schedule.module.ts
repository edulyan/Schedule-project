import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScheduleComponent } from './schedule.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  exports: [ScheduleComponent],
  declarations: [ScheduleComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
  ],
  providers: [],
})
export class ScheduleModule {}
