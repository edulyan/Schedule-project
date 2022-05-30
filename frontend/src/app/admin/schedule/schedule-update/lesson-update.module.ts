import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LessonUpdateComponent } from './lesson-update.component';

@NgModule({
  exports: [LessonUpdateComponent],
  declarations: [LessonUpdateComponent],
  imports: [CommonModule],
})
export class LessonUpdateModule {}
