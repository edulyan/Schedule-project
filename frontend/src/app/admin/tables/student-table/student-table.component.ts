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
import { IGroup } from 'src/app/models/group/group.interface';
import { GroupService } from 'src/app/service/group.service';
import { UpdateStudentGroupComponent } from './update-student-group/update-student-group.component';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-create-student',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private groupService: GroupService,
    public matDialog: MatDialog
  ) {}

  private studentData = new BehaviorSubject<IStudent[]>([]);
  private groupData = new BehaviorSubject<IGroup[]>([]);
  public students: IStudent = {} as IStudent;

  ngOnInit() {
    this.groupService
      .getAll()
      .subscribe((groupListItem) => this.groupData.next(groupListItem));
    this.studentService
      .getAll()
      .subscribe((studentListItem) => this.studentData.next(studentListItem));
  }

  displayedColumns: string[] = [
    'ID',
    'firstname',
    'lastname',
    'email',
    'phone',
    'group',
    'delete',
  ];

  getStudents(): Observable<IStudent[]> {
    return this.studentData.asObservable();
  }

  getGroups(): Observable<IGroup[]> {
    return this.groupData.asObservable();
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

  update(studentUPD: IStudent) {
    const ref = this.matDialog.open(StudentUpdateComponent, {
      width: '400px',
      data: { student: studentUPD },
    });

    ref.afterClosed().subscribe((editedStudent: IStudent) => {
      if (editedStudent) {
        const list = this.studentData.getValue();
        const postIndex = _.findIndex(
          list,
          (post) => post.id === editedStudent.id
        );
        list[postIndex] = editedStudent;

        this.studentData.next(_.cloneDeep(list));
      }
    });
  }

  updateGroup(studentUPD: IStudent) {
    const ref = this.matDialog.open(UpdateStudentGroupComponent, {
      width: '400px',
      data: { student: studentUPD },
    });

    ref.afterClosed().subscribe((studentUp: IStudent) => {
      if (studentUp) {
        const list = this.studentData.getValue();
        const postIndex = _.findIndex(list, (post) => post.id === studentUp.id);
        list[postIndex] = studentUp;

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
