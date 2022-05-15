import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICreateStudent } from 'src/app/models/student/createStudent.interface';
import { IStudent } from 'src/app/models/student/student.interface';
import { IUpdateStudent } from 'src/app/models/student/updateStudent.interface';
import { AuthService } from 'src/app/service/auth.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss'],
})
export class StudentCreateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ICreateStudent>,
    private authService: AuthService,
    private studentService: StudentService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  registerForm: FormGroup | any;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }

  createStudent() {
    if (this.registerForm.valid) {
      this.handleAfterCreate(
        this.authService.registrationStudent(this.registerForm.value)
      );
    }
  }

  // create(form: NgForm) {
  //   if (form.valid) {
  //     this.handleAfterCreate(
  //       this.isEditing
  //         ? this.studentService.update(id: number, this.newStudentModel as IUpdateStudent)
  //         : this.studentService.createStudent(this.newStudentModel)
  //     );
  //   }
  // }

  private handleAfterCreate(observable: Observable<IStudent>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
