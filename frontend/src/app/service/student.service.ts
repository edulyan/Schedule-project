import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICreateTeacher } from '../models/teacher/сreateTeacher.interface';
import { IStudent } from '../models/student/student.interface';
import { ICreateStudent } from '../models/student/createStudent.interface';

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  constructor(private http: HttpClient) {}

  private URL_STUDENT = 'http://localhost:3500/student';

  public getAll(): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(`${this.URL_STUDENT}`);
  }

  public getById(id: number): Observable<IStudent> {
    return this.http.get<IStudent>(`${this.URL_STUDENT}/${id}`);
  }

  public getByEmail(email: string): Observable<IStudent> {
    return this.http.get<IStudent>(`${this.URL_STUDENT}/${email}`);
  }

  public search(firstname: string): Observable<IStudent[]> {
    return this.http.get<IStudent[]>(
      `${this.URL_STUDENT}/search?query=` + firstname
    ) as Observable<IStudent[]>;
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

  public update(studentDto: IStudent): Observable<IStudent> {
    return this.http.put(
      `${this.URL_STUDENT}`,
      studentDto
    ) as Observable<IStudent>;
  }

  public remove(id: number): Observable<any> {
    return this.http.delete<IStudent>(`${this.URL_STUDENT}/${id}`);
  }
}
