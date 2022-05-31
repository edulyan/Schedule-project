import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ICreateLesson } from 'src/app/models/lesson/createLesson.interface';
import { ILesson } from 'src/app/models/lesson/lesson.interface';
import { LessonService } from 'src/app/service/lesson.service';

@Component({
  selector: 'app-lesson-create',
  templateUrl: './lesson-create.component.html',
  styleUrls: ['./lesson-create.component.scss'],
})
export class LessonCreateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<LessonCreateComponent>,
    private lessonService: LessonService
  ) {}

  public newLessonModel: ICreateLesson = {} as ICreateLesson;

  ngOnInit(): void {}

  public createStudent(form: NgForm) {
    if (form.valid) {
      this.handleAfterCreate(this.lessonService.create(this.newLessonModel));
    }
  }

  private handleAfterCreate(observable: Observable<ILesson>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
