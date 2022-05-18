import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { ICreateStudent } from 'src/app/models/student/createStudent.interface';
import { IStudent } from 'src/app/models/student/student.interface';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss'],
})
export class StudentCreateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<StudentCreateComponent>,
    private authService: AuthService
  ) {}

  public newStudentModel: ICreateStudent = {} as ICreateStudent;

  ngOnInit(): void {}

  public createStudent(form: NgForm) {
    if (form.valid) {
      this.handleAfterCreate(
        this.authService.registrationStudent(this.newStudentModel)
      );
    }
  }

  private handleAfterCreate(observable: Observable<IStudent>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
