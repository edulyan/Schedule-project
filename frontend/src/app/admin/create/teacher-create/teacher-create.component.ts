import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ITeacher } from 'src/app/models/teacher/teacher.interface';
import { ICreateTeacher } from 'src/app/models/teacher/сreateTeacher.interface';
import { AuthService } from 'src/app/service/auth.service';
import { TeacherService } from 'src/app/service/teacher.service';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.scss'],
})
export class TeacherCreateComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<ICreateTeacher>,
    private authService: AuthService,
    private teacherService: TeacherService,
    private router: Router,
    private formBuilder: FormBuilder // @Inject(MAT_DIALOG_DATA) public data: { studentUpdate: IUpdateStudent }
  ) {}

  public isEditing = false;
  public newStudentModel: ITeacher = {} as ITeacher;

  registerForm: FormGroup | any;

  ngOnInit(): void {
    // this.isEditing = Boolean(this.data && this.data.studentUpdate);
    // this.newStudentModel = this.data.studentUpdate;

    this.registerForm = this.formBuilder.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      password: ['', [Validators.required]],
      department: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
    });
  }

  createTeacher() {
    if (this.registerForm.invalid) {
      return;
    }

    this.handleAfterCreate(
      this.authService.registrationTeacher(this.registerForm.value)
    );

    // console.log(this.registerForm.value);
    // this.authService.registrationStudent(this.registerForm.value).subscribe();
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

  private handleAfterCreate(observable: Observable<ITeacher>) {
    return observable.subscribe((response) => {
      this.dialogRef.close(response);
    });
  }
}
