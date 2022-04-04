import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ITeacher } from '../models/teacher/teacher.interface';
import { Observable } from 'rxjs';
import { ICreateTeacher } from '../models/teacher/сreateTeacher.interface';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private URL_TEACHER: string = 'http://localhost:3500/teacher';

  public getAll(): Observable<ITeacher[]> {
    return this.http.get<ITeacher[]>(`${this.URL_TEACHER}`);
  }

  public getById(id: number): Observable<ITeacher> {
    return this.http.get<ITeacher>(`${this.URL_TEACHER}/${id}`);
  }

  // public createTeacher() {}

  public addRole(teacherId: number, roleId: number): Observable<ITeacher> {
    return this.http.post<ITeacher>(
      `${this.URL_TEACHER}/addRoleToTeacher/${teacherId}/${roleId}`,
      {
        teacherId,
        roleId,
      }
    );
  }

  public addSubject(
    teacherId: number,
    subjectId: number
  ): Observable<ITeacher> {
    return this.http.post<ITeacher>(
      `${this.URL_TEACHER}/addSubjectToTeacher/${teacherId}/${subjectId}`,
      {
        teacherId,
        subjectId,
      }
    );
  }

  public update(id: number, teacherDto: ICreateTeacher): Observable<{}> {
    return this.http.put<ITeacher>(`${this.URL_TEACHER}/${id}`, {
      teacherDto,
    });
  }

  public remove(id: number): Observable<{}> {
    return this.http.delete<ITeacher>(`${this.URL_TEACHER}/${id}`);
  }
}
