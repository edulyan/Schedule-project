import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateGroup } from '../models/group/createGroup.interface';
import { IGroup } from '../models/group/group.interface';

@Injectable({
  providedIn: 'root',
})
export class GroupService {
  constructor(private http: HttpClient) {}

  private URL_GROUP: string = 'http://localhost:3500/group';

  public getAll(): Observable<IGroup[]> {
    return this.http.get<IGroup[]>(`${this.URL_GROUP}`);
  }

  public getById(id: number): Observable<IGroup> {
    return this.http.get<IGroup>(`${this.URL_GROUP}/${id}`);
  }

  public create(group: ICreateGroup): Observable<IGroup> {
    return this.http.post<IGroup>(`${this.URL_GROUP}`, {
      group,
    });
  }

  public remove(id: number): Observable<{}> {
    return this.http.delete<IGroup>(`${this.URL_GROUP}/${id}`);
  }
}
