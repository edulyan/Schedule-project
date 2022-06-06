import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { BehaviorSubject, Observable } from 'rxjs';
import { StudentUpdateComponent } from 'src/app/admin/update/student-update/student-update.component';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ILesson } from 'src/app/models/lesson/lesson.interface';
import { IStudent } from 'src/app/models/student/student.interface';
import { LessonService } from 'src/app/service/lesson.service';

export interface PeriodicElement {
  name?: string;
  time: string;
  classroom?: string;
  teacher?: string;
}

const Monday: PeriodicElement[] = [
  {
    time: '8:15 - 9:45',
    name: 'Математика',
    classroom: '124',
    teacher: 'Ольга Ивановна',
  },
  {
    time: '09:55 - 11:25',
    name: 'Английский язык',
    classroom: '115',
    teacher: 'Марина Николаевна',
  },
  {
    time: '11:50 - 13:20',
    name: 'Технический анализ',
    classroom: '130',
    teacher: 'Олег Олегович',
  },
  { time: '13:45 - 15:15', name: '', classroom: '', teacher: '' },
  { time: '15:25 - 16:55', name: '', classroom: '', teacher: '' },
  { time: '17:05 - 18:35', name: '', classroom: '', teacher: '' },
  { time: '18:55 - 20:25', name: '', classroom: '', teacher: '' },
  { time: '20:30 - 22:00', name: '', classroom: '', teacher: '' },
];

@Component({
  selector: 'app-admin-schedule-table',
  templateUrl: './admin-schedule-table.component.html',
  styleUrls: ['./admin-schedule-table.component.scss'],
})
export class AdminScheduleTableComponent implements OnInit {
  constructor(
    private lessonService: LessonService,
    public matDialog: MatDialog
  ) {}

  private lessonData = new BehaviorSubject<ILesson[]>([]);

  public id_page = +document.location.href.slice(-1);

  ngOnInit(): void {
    this.lessonService
      .getAll()
      .subscribe((lessonListItem) => this.lessonData.next(lessonListItem));
  }

  displayedColumns: string[] = ['time', 'day-name', 'create', 'delete'];
  dataSource = Monday;

  getLessons(): Observable<ILesson[]> {
    return this.lessonData.asObservable();
  }

  update(lessonUPD: IStudent) {
    const ref = this.matDialog.open(StudentUpdateComponent, {
      width: '400px',
      data: { student: lessonUPD },
    });

    ref.afterClosed().subscribe((editedStudent: IStudent) => {
      if (editedStudent) {
        const list = this.lessonData.getValue();
        const postIndex = _.findIndex(
          list,
          (post) => post.id === editedStudent.id
        );

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
