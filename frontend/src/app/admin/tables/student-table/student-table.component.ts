import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { IStudent } from 'src/app/models/student/student.interface';
import { StudentService } from 'src/app/service/student.service';
import { StudentCreateComponent } from '../../create/student-create/student-create.component';
import { StudentUpdateComponent } from '../../update/student-update/student-update.component';
import * as _ from 'lodash';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { ICreateStudent } from 'src/app/models/student/createStudent.interface';

@Component({
  selector: 'app-create-student',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    public matDialog: MatDialog
  ) {}

  private studentData = new BehaviorSubject<IStudent[]>([]);
  public students: IStudent = {} as IStudent;

  ngOnInit() {
    this.studentService
      .getAll()
      .subscribe((studentListItem) => this.studentData.next(studentListItem));
  }

  displayedColumns: string[] = [
    'ID',
    'firstname',
    'lastname',
    'password',
    'email',
    'phone',
    'group',
    'delete',
  ];

  getStudents(): Observable<IStudent[]> {
    return this.studentData.asObservable();
  }

  searchStudent(firstname: string) {
    if (!firstname) {
      this.studentService
        .getAll()
        .subscribe((studentListItem) => this.studentData.next(studentListItem));
    } else {
      this.studentService
        .search(firstname)
        .subscribe((studentListItem) => this.studentData.next(studentListItem));
    }
  }

  create() {
    const ref = this.matDialog.open(StudentCreateComponent, {
      width: '400px',
    });

    ref.afterClosed().subscribe((student: IStudent) => {
      if (student) {
        const list = this.studentData.getValue();
        list.push(student);
        this.studentData.next(_.cloneDeep(list));
      }
    });
  }

  update(student: IStudent) {
    const ref = this.matDialog.open(StudentUpdateComponent, {
      width: '400px',
      // data: { studentUPD: student },
    });

    ref.afterClosed().subscribe((canContinue) => {
      if (canContinue) {
        const list = this.studentData.getValue();
        const postIndex = _.findIndex(list, (post) => post.id === student.id);
        list[postIndex] = student;

        this.studentData.next(_.cloneDeep(list));
      }
    });
  }

  delete(student: IStudent) {
    const ref = this.matDialog.open(DialogComponent, {
      width: '360px',
      height: '190px',
    });

    ref.afterClosed().subscribe((canContinue) => {
      if (canContinue) {
        this.studentService.remove(student.id).subscribe(() => {
          const list = this.studentData.getValue();
          _.remove(list, (post) => post.id === student.id);
          this.studentData.next(_.cloneDeep(list));
        });
      }
    });
  }
}
