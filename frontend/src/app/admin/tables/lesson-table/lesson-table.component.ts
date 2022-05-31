import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ILesson } from 'src/app/models/lesson/lesson.interface';
import { LessonService } from 'src/app/service/lesson.service';
import { LessonCreateComponent } from '../../create/lesson-create/lesson-create.component';
import { LessonUpdateComponent } from '../../update/lesson-update/lesson-update.component';

@Component({
  selector: 'app-lesson-table',
  templateUrl: './lesson-table.component.html',
  styleUrls: ['./lesson-table.component.scss'],
})
export class LessonTableComponent implements OnInit {
  constructor(
    private matDialog: MatDialog,
    public lessonService: LessonService
  ) {}

  private lessonData = new BehaviorSubject<ILesson[]>([]);
  public lessons: ILesson = {} as ILesson;

  ngOnInit(): void {
    this.lessonService
      .getAll()
      .subscribe((lessonListItem) => this.lessonData.next(lessonListItem));
  }

  displayedColumns: string[] = [
    'ID',
    'title',
    'classroom',
    'group',
    'teacher',
    'delete',
  ];

  getLessons(): Observable<ILesson[]> {
    return this.lessonData.asObservable();
  }

  searchLessons(title: string) {
    if (!title) {
      this.lessonService
        .getAll()
        .subscribe((studentListItem) => this.lessonData.next(studentListItem));
    } else {
      this.lessonService
        .search(title)
        .subscribe((studentListItem) => this.lessonData.next(studentListItem));
    }
  }

  create() {
    const ref = this.matDialog.open(LessonCreateComponent, {
      width: '400px',
    });

    ref.afterClosed().subscribe((lesson: ILesson) => {
      if (lesson) {
        const list = this.lessonData.getValue();
        list.push(lesson);
        this.lessonData.next(_.cloneDeep(list));
      }
    });
  }

  update(lessonUPD: ILesson) {
    const ref = this.matDialog.open(LessonUpdateComponent, {
      width: '400px',
      data: { lesson: lessonUPD },
    });

    ref.afterClosed().subscribe((editedLesson: ILesson) => {
      if (editedLesson) {
        const list = this.lessonData.getValue();
        const postIndex = _.findIndex(
          list,
          (post) => post.id === editedLesson.id
        );
        list[postIndex] = editedLesson;

        this.lessonData.next(_.cloneDeep(list));
      }
    });
  }

  delete(lesson: ILesson) {
    const ref = this.matDialog.open(DialogComponent, {
      width: '360px',
      height: '190px',
    });

    ref.afterClosed().subscribe((canContinue) => {
      if (canContinue) {
        this.lessonService.remove(lesson.id).subscribe(() => {
          const list = this.lessonData.getValue();
          _.remove(list, (post) => post.id === lesson.id);
          this.lessonData.next(_.cloneDeep(list));
        });
      }
    });
  }
}
