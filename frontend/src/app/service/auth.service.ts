import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from '../models/auth/login.interface';
import { ICreateStudent } from '../models/student/createStudent.interface';
import { IStudent } from '../models/student/student.interface';
import { ITeacher } from '../models/teacher/teacher.interface';
import { ICreateTeacher } from '../models/teacher/сreateTeacher.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private URL_AUTH = 'http://localhost:3500/auth';

  public loginStudent(logStudent: Login): Observable<IStudent> {
    return this.http.post<IStudent>(`${this.URL_AUTH}/student/login`, {
      logStudent,
    });
  }

  public loginTeacher(logTeacher: Login): Observable<IStudent> {
    return this.http.post<IStudent>(`${this.URL_AUTH}/teacher/login`, {
      logTeacher,
    });
  }

  public registrationStudent(student: ICreateStudent): Observable<IStudent> {
    return this.http.post<IStudent>(`${this.URL_AUTH}/student/registration`, {
      student,
    });
  }

  public registrationTeacher(teacher: ICreateTeacher): Observable<ITeacher> {
    return this.http.post<ITeacher>(`${this.URL_AUTH}/teacher/registration`, {
      teacher,
    });
  }
}
