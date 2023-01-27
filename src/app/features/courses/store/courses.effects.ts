import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as CoursesActions from './courses.actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { course } from 'src/app/shared/interfaces/course';


@Injectable()
export class CoursesEffects {

  constructor(private actions$: Actions, private http: HttpClient) {}

  loadCourses$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CoursesActions.loadCourses),
      concatMap(() =>
        this.getAll().pipe(
          map(data => CoursesActions.loadCoursesSuccess({ data })),
          catchError(error => of(CoursesActions.loadCoursesFailure({ error }))))
      )
    );
  });

  removeCourse$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(CoursesActions.removeCourse),
      concatMap((action) =>
        this.removeCourse(action.course).pipe(
          map(data => CoursesActions.loadCourses()),
          catchError(error => of(CoursesActions.removeCourseFailure({ error }))))
      )
    );
  });

  createCourse$ = createEffect(() => {
    return this.actions$.pipe( 
      ofType(CoursesActions.createCourse),
      concatMap((action) =>
        this.addCourse(action.course).pipe(
          map(data => CoursesActions.createCoursesuccess()),
          catchError(error => of(CoursesActions.createCourseFailure({ error }))))
      )
    );
  });

  private getHeadersOptions(): HttpHeaders
  {
    return new HttpHeaders({'content-type' : 'application/json'})
  }

  getAll(): Observable<any>{
    return this.http.get<course[]>('https://63d2e7b71780fd6ab9cf2b7f.mockapi.io/courses', {headers: this.getHeadersOptions()})
  }

  removeCourse(course: course): Observable<any>
  {
    return this.http.delete(`https://63d2e7b71780fd6ab9cf2b7f.mockapi.io/courses/${course.id}`, {headers: this.getHeadersOptions()})
  }

  addCourse(Course: course): Observable<any>
  {
    return this.http.post('https://63d2e7b71780fd6ab9cf2b7f.mockapi.io/courses', Course, {headers: this.getHeadersOptions()})
  }

}
