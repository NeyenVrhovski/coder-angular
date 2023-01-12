import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from 'src/app/shared/interfaces/student';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient
   ) { 

  }

  private getHeadersOptions(): HttpHeaders
  {
    return new HttpHeaders({'content-type' : 'application/json'})
  }

  getAll(): Observable<any>{
    return this.http.get<student[]>(`${environment.baseURL}/students`, {headers: this.getHeadersOptions()})
  }

  removeStudent(student: student): Observable<any>
  {
    return this.http.delete(`${environment.baseURL}/students/${student.id}`, {headers: this.getHeadersOptions()})
  }

  addStudent(student: student): Observable<any>
  {
    return this.http.post(`${environment.baseURL}/students`, student, {headers: this.getHeadersOptions()})
  }
}
