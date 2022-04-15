import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminScheduleTableComponent } from './admin-schedule-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  exports: [AdminScheduleTableComponent],
  declarations: [AdminScheduleTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatDialogModule,
    MatTooltipModule,
  ],
  providers: [],
})
export class AdminScheduleTableModule {}
