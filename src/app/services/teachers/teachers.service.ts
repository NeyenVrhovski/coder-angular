import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { teacher } from 'src/app/shared/interfaces/teacher';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor(
    private http: HttpClient
   ) { 

  }

  private getHeadersOptions(): HttpHeaders
  {
    return new HttpHeaders({'content-type' : 'application/json'})
  }

  getAll(): Observable<any>{
    return this.http.get<teacher[]>(`${environment.baseURL}/teachers`, {headers: this.getHeadersOptions()})
  }

  removeTeacher(teacher: teacher): Observable<any>
  {
    return this.http.delete(`${environment.baseURL}/teachers/${teacher.id}`, {headers: this.getHeadersOptions()})
  }

  addTeacher(teacher: teacher): Observable<any>
  {
    return this.http.post(`${environment.baseURL}/teachers`, teacher, {headers: this.getHeadersOptions()})
  }
}
