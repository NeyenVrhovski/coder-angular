import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as StudentsActions from './students.actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { student } from 'src/app/shared/interfaces/student';
import { environment } from 'src/environments/environment';


@Injectable()
export class StudentsEffects {

  constructor(private actions$: Actions, private http: HttpClient) {}

  loadStudents$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(StudentsActions.loadStudents),
      concatMap(() =>
        this.getAll().pipe(
          map(data => StudentsActions.loadStudentsSuccess({ data })),
          catchError(error => of(StudentsActions.loadStudentsFailure({ error }))))
      )
    );
  });

  removeStudent$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(StudentsActions.removeStudent),
      concatMap((action) =>
        this.removeStudent(action.student).pipe(
          map(data => StudentsActions.loadStudents()),
          catchError(error => of(StudentsActions.removeStudentFailure({ error }))))
      )
    );
  });

  createStudent$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(StudentsActions.createStudent),
      concatMap((action) =>
        this.addStudent(action.student).pipe(
          map(data => StudentsActions.createStudentSuccess()),
          catchError(error => of(StudentsActions.createStudentFailure({ error }))))
      )
    );
  });

  private getHeadersOptions(): HttpHeaders
  {
    return new HttpHeaders({'content-type' : 'application/json'})
  }

  private getAll(): Observable<student[]>{
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
