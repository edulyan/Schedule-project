import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITeacher } from 'src/app/models/teacher/teacher.interface';
import { TeacherService } from 'src/app/service/teacher.service';
import { TeacherCreateComponent } from '../../create/teacher-create/teacher-create.component';
import { TeacherUpdateComponent } from '../../update/teacher-update/teacher-update.component';

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

  ngOnInit(): void {
    this.teacherService
      .getAll()
      .subscribe((teacherListItem) => this.teacherData.next(teacherListItem));
  }

  displayedColumns: string[] = [
    'ID',
    'firstname',
    'lastname',
    'password',
    'department',
    'email',
    'phone',
    'delete',
  ];

  getTeachers(): Observable<ITeacher[]> {
    return this.teacherData.asObservable();
  }

  create() {
    this.matDialog.open(TeacherCreateComponent, {
      width: '400px',
    });
  }

  update() {
    this.matDialog.open(TeacherUpdateComponent, {
      width: '400px',
    });
  }
}
