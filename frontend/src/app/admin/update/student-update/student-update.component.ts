import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ICreateStudent } from 'src/app/models/student/createStudent.interface';
import { IStudent } from 'src/app/models/student/student.interface';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.scss'],
})
export class StudentUpdateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ICreateStudent>,
    private formBuilder: FormBuilder,
    private studentService: StudentService // @Inject(MAT_DIALOG_DATA) public data: { studentUpdate: IStudent }
  ) {}

  public updateStudentModel: IStudent = {} as IStudent;

  // updateForm: FormGroup | any;

  ngOnInit(): void {
    // this.updateForm = this.formBuilder.group({
    //   firstname: ['', [Validators.required]],
    //   lastname: ['', [Validators.required]],
    //   password: ['', [Validators.required]],
    //   email: ['', [Validators.required, Validators.email]],
    //   phone: ['', [Validators.required]],
    // });
    // this.updateStudentModel = this.data.studentUpdate;
  }

  updateStudent(form: NgForm) {
    if (form.valid) {
      this.handleAfterCreate(
        this.studentService.update(
          this.updateStudentModel.id,
          this.updateStudentModel
        )
      );
    }
  }

  private handleAfterCreate(observable: Observable<IStudent>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
