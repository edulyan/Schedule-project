import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { IStudent } from 'src/app/models/student/student.interface';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.scss'],
})
export class StudentUpdateComponent implements OnInit {
  public updateStudentModel: IStudent = {} as IStudent;

  constructor(
    private dialogRef: MatDialogRef<StudentUpdateComponent>,
    private studentService: StudentService,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    this.updateStudentModel = this.data.student as IStudent;
  }

  updateStudent(form: NgForm) {
    if (form.valid) {
      this.handleAfterCreate(
        this.studentService.update(this.updateStudentModel)
      );
    }
  }

  private handleAfterCreate(observable: Observable<IStudent>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
