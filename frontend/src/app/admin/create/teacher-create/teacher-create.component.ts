import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ITeacher } from 'src/app/models/teacher/teacher.interface';
import { ICreateTeacher } from 'src/app/models/teacher/сreateTeacher.interface';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.scss'],
})
export class TeacherCreateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<TeacherCreateComponent>,
    private authService: AuthService
  ) {}

  public newTeacherModel: ICreateTeacher = {} as ICreateTeacher;

  ngOnInit(): void {}

  createTeacher(form: NgForm) {
    if (form.valid) {
      this.handleAfterCreate(
        this.authService.registrationTeacher(this.newTeacherModel)
      );
    }
  }

  private handleAfterCreate(observable: Observable<ITeacher>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
