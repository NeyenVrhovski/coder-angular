import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import * as TeachersActions from './teachers.actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { teacher } from 'src/app/shared/interfaces/teacher';

@Injectable()
export class TeachersEffects {

  constructor(private actions$: Actions, private http: HttpClient) {}

  loadTeachers$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(TeachersActions.loadTeachers),
      concatMap(() =>
        this.getAll().pipe(
          map(data => TeachersActions.loadTeachersSuccess({ data })),
          catchError(error => of(TeachersActions.loadTeachersFailure({ error }))))
      )
    );
  });

  removeTeacher$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(TeachersActions.removeTeacher),
      concatMap((action) =>
        this.removeTeacher(action.teacher).pipe(
          map(data => TeachersActions.loadTeachers()),
          catchError(error => of(TeachersActions.removeTeacherFailure({ error }))))
      )
    );
  });

  createTeacher$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(TeachersActions.createTeacher),
      concatMap((action) =>
        this.addTeacher(action.teacher).pipe(
          map(data => TeachersActions.createTeachersuccess()),
          catchError(error => of(TeachersActions.createTeacherFailure({ error }))))
      )
    );
  });

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
