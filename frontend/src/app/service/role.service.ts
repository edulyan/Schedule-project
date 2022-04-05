import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICreateRole } from '../models/role/createRole.interface';
import { IRole } from '../models/role/role.interface';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  constructor(private http: HttpClient) {}

  private URL_ROLE: string = 'http://localhost:3500/role';

  public createRole(role: ICreateRole): Observable<IRole> {
    return this.http.post<IRole>(`${this.URL_ROLE}`, {
      role,
    });
  }

  public remove(id: number): Observable<{}> {
    return this.http.delete<IRole>(`${this.URL_ROLE}/${id}`);
  }
}
