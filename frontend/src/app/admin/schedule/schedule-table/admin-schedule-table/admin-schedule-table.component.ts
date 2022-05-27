import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import * as _ from 'lodash';
import { BehaviorSubject } from 'rxjs';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ILesson } from 'src/app/models/lesson/lesson.interface';
import { LessonService } from 'src/app/service/lesson.service';
import { AdminScheduleUpdateComponent } from '../../schedule-update/admin-schedule-update/admin-schedule-update.component';

export interface PeriodicElement {
  name: string;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { time: '8:15 - 9:45', name: 'Hydrogen' },
  { time: '09:55 - 11:25', name: 'Helium' },
  { time: '11:50 - 13:20', name: 'Lithium' },
  { time: '13:45 - 15:15', name: 'Beryllium' },
  { time: '15:25 - 16:55', name: 'Boron' },
  { time: '17:05 - 18:35', name: 'Carbon' },
  { time: '18:55 - 20:25', name: 'Nitrogen' },
  { time: '20:30 - 22:00', name: 'Oxygen' },
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

  ngOnInit(): void {
    this.lessonService
      .getAll()
      .subscribe((lessonListItem) => this.lessonData.next(lessonListItem));
  }

  displayedColumns: string[] = ['time', 'day-name', 'create', 'delete'];
  dataSource = ELEMENT_DATA;

  update() {
    this.matDialog.open(AdminScheduleUpdateComponent, {
      width: '400px',
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
