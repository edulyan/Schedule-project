import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { IStudent } from 'src/app/models/student/student.interface';
import { StudentService } from 'src/app/service/student.service';
import { StudentCreateComponent } from '../../create/student-create/student-create.component';
import { StudentUpdateComponent } from '../../update/student-update/student-update.component';

@Component({
  selector: 'app-create-student',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.scss'],
})
export class StudentTableComponent implements OnInit {
  constructor(
    private studentService: StudentService,
    private matDialog: MatDialog
  ) {}

  private studentData = new BehaviorSubject<IStudent[]>([]);

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
    'group_title',
    'delete',
  ];

  getStudents(): Observable<IStudent[]> {
    // this.studentService.getAll().subscribe(
    //   (res) => (this.students = res),
    //   (err) => console.log(err)
    // );
    return this.studentData.asObservable();
  }

  create() {
    this.matDialog.open(StudentCreateComponent, {
      width: '400px',
    });
  }

  update() {
    this.matDialog.open(StudentUpdateComponent, {
      width: '400px',
    });
  }
}
