import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ILesson } from 'src/app/models/lesson/lesson.interface';
import { LessonService } from 'src/app/service/lesson.service';

@Component({
  selector: 'app-lesson-update',
  templateUrl: './lesson-update.component.html',
  styleUrls: ['./lesson-update.component.scss'],
})
export class LessonUpdateComponent implements OnInit {
  public updateLessonModel: ILesson = {} as ILesson;

  constructor(
    private dialogRef: MatDialogRef<LessonUpdateComponent>,
    private lessonService: LessonService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.updateLessonModel = this.data.lesson as ILesson;
  }

  updateLesson(form: NgForm) {
    if (form.valid) {
      this.handleAfterCreate(this.lessonService.update(this.updateLessonModel));
    }
  }

  private handleAfterCreate(observable: Observable<ILesson>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
