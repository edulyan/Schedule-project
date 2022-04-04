import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICreateTeacher } from '../models/teacher/сreateTeacher.interface';
import { IStudent } from '../models/student/student.interface';
import { ICreateStudent } from '../models/student/createStudent.interface';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private URL_STUDENT: string = 'http://localhost:3500/student';

  public getAll(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${this.URL_STUDENT}`);
  }

  public getById(id: number): Observable<IStudent> {
    return this.http.get<IStudent>(`${this.URL_STUDENT}/${id}`);
  }

  public getByEmail(email: string): Observable<IStudent> {
    return this.http.get<IStudent>(`${this.URL_STUDENT}/${email}`);
  }

  public createStudent(studentDto: ICreateStudent): Observable<IStudent> {
    return this.http.post<IStudent>(`${this.URL_STUDENT}`, {
      studentDto,
    });
  }

  public addRole(studentId: number, roleId: number): Observable<IStudent> {
    return this.http.post<IStudent>(
      `${this.URL_STUDENT}/addRoleToStudent/${studentId}/${roleId}`,
      {
        studentId,
        roleId,
      }
    );
  }

  public addGroup(studentId: number, subjectId: number): Observable<IStudent> {
    return this.http.post<IStudent>(
      `${this.URL_STUDENT}/addSubjectToStudent/${studentId}/${subjectId}`,
      {
        studentId,
        subjectId,
      }
    );
  }

  public update(id: number, studentDto: ICreateStudent): Observable<{}> {
    return this.http.put<IStudent>(`${this.URL_STUDENT}/${id}`, {
      studentDto,
    });
  }

  public remove(id: number): Observable<{}> {
    return this.http.delete<IStudent>(`${this.URL_STUDENT}/${id}`);
  }
}