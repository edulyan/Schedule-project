import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-teacher.component.html',
  styleUrls: ['./auth-teacher.component.scss'],
})
export class AuthTeacherComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  formGroup: FormGroup | any;
  hide = true;

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public signIn(): void {
    console.log(this.formGroup.value);

    this.authService.loginTeacher(this.formGroup.value).subscribe();
  }

  // public signIn(): void {
  //   console.log(this.formGroup.getRawValue());

  //   this.http
  //     .post(
  //       'http://localhost:3500/auth/student/login',
  //       this.formGroup.getRawValue()
  //     )
  //     .subscribe();
  // }
}
