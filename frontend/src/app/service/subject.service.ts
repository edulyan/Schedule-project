import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateSubject } from '../models/subject/createSubject.interface';
import { ISubject } from '../models/subject/subject.interface';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  constructor(private http: HttpClient) {}

  private URL_SUBJECT: string = 'http://localhost:3500/subject';

  public getAll(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(`${this.URL_SUBJECT}`);
  }

  public search(title: string): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(
      `${this.URL_SUBJECT}/search?query=` + title
    );
  }

  public getById(id: number): Observable<ISubject> {
    return this.http.get<ISubject>(`${this.URL_SUBJECT}/${id}`);
  }

  public getByTitle(title: string): Observable<ISubject> {
    return this.http.get<ISubject>(`${this.URL_SUBJECT}/${title}`);
  }

  public createSubject(subjectDto: ICreateSubject): Observable<ISubject> {
    return this.http.post<ISubject>(`${this.URL_SUBJECT}`, subjectDto);
  }

  public update(subjectDto: ISubject): Observable<ISubject> {
    return this.http.put<ISubject>(`${this.URL_SUBJECT}`, subjectDto);
  }

  public remove(id: number): Observable<{}> {
    return this.http.delete<ISubject>(`${this.URL_SUBJECT}/${id}`);
  }
}
