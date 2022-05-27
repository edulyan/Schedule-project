import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITeacher } from 'src/app/models/teacher/teacher.interface';
import { TeacherService } from 'src/app/service/teacher.service';
import { TeacherCreateComponent } from '../../create/teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from '../../update/teacher-update/teacher-update.component';
import * as _ from 'lodash';

@Component({
  selector: 'app-create-teacher',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.scss'],
})
export class TeacherTableComponent implements OnInit {
  constructor(
    private teacherService: TeacherService,
    private matDialog: MatDialog
  ) {}

  private teacherData = new BehaviorSubject<ITeacher[]>([]);
  public teachers: ITeacher = {} as ITeacher;

  ngOnInit(): void {
    this.teacherService
      .getAll()
      .subscribe((teacherListItem) => this.teacherData.next(teacherListItem));
  }

  displayedColumns: string[] = [
    'ID',
    'firstname',
    'lastname',
    'department',
    'email',
    'phone',
    'delete',
  ];

  getTeachers(): Observable<ITeacher[]> {
    return this.teacherData.asObservable();
  }

  searchStudent(firstname: string) {
    if (!firstname) {
      this.teacherService
        .getAll()
        .subscribe((teacherListItem) => this.teacherData.next(teacherListItem));
    } else {
      this.teacherService
        .search(firstname)
        .subscribe((teacherListItem) => this.teacherData.next(teacherListItem));
    }
  }

  create() {
    const ref = this.matDialog.open(TeacherCreateComponent, {
      width: '400px',
    });

    ref.afterClosed().subscribe((teacher: ITeacher) => {
      if (teacher) {
        const list = this.teacherData.getValue();
        list.push(teacher);
        this.teacherData.next(_.cloneDeep(list));
      }
    });
  }

  update(teacherUPD: ITeacher) {
    const ref = this.matDialog.open(TeacherUpdateComponent, {
      width: '400px',
      data: { teacher: teacherUPD },
    });

    ref.afterClosed().subscribe((editedTeacher: ITeacher) => {
      if (editedTeacher) {
        console.log(1234);

        const list = this.teacherData.getValue();
        const postIndex = _.findIndex(
          list,
          (post) => post.id === editedTeacher.id
        );
        list[postIndex] = editedTeacher;

        this.teacherData.next(_.cloneDeep(list));
      }
    });
  }

  delete(teacher: ITeacher) {
    this.teacherService.remove(teacher.id).subscribe(() => {
      const list = this.teacherData.getValue();
      _.remove(list, (post) => post.id === teacher.id);
      this.teacherData.next(_.cloneDeep(list));
    });
  }
}
