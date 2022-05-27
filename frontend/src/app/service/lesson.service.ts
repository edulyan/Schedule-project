import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateLesson } from '../models/lesson/createLesson.interface';
import { ILesson } from '../models/lesson/lesson.interface';

@Injectable({
  providedIn: 'root',
})
export class LessonService {
  constructor(private http: HttpClient) {}

  private URL_LESSON: string = 'http://localhost:3500/lesson';

  public getAll(): Observable<ILesson[]> {
    return this.http.get<ILesson[]>(`${this.URL_LESSON}`);
  }

  public getById(id: number): Observable<ILesson> {
    return this.http.get<ILesson>(`${this.URL_LESSON}/${id}`);
  }

  public create(lesson: ICreateLesson): Observable<ILesson> {
    return this.http.post<ILesson>(`${this.URL_LESSON}`, {
      lesson,
    });
  }

  public addGroup(lessonId: number, groupId: number): Observable<ILesson> {
    return this.http.post<ILesson>(
      `${this.URL_LESSON}/addGroupToLesson/${lessonId}/${groupId}`,
      {
        lessonId,
        groupId,
      }
    );
  }

  public addSubject(lessonId: number, subjectId: number): Observable<ILesson> {
    return this.http.post<ILesson>(
      `${this.URL_LESSON}/addSubjectToLesson/${lessonId}/${subjectId}`,
      {
        lessonId,
        subjectId,
      }
    );
  }

  public addTeacher(lessonId: number, teacherId: number): Observable<ILesson> {
    return this.http.post<ILesson>(
      `${this.URL_LESSON}/addTeacherToLesson/${lessonId}/${teacherId}`,
      {
        lessonId,
        teacherId,
      }
    );
  }

  public update(id: number, lesson: ICreateLesson): Observable<{}> {
    return this.http.put<ILesson>(`${this.URL_LESSON}/${id}`, {
      lesson,
    });
  }

  public remove(id: number): Observable<any> {
    return this.http.delete<ILesson>(`${this.URL_LESSON}/${id}`);
  }
}
