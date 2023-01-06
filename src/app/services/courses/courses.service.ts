import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { course } from 'src/app/shared/interfaces/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getAll(): Observable<any>{
    const courses: course[] = JSON.parse(localStorage.getItem('courses') || '')
    const $courses = new Observable(obs => {
      obs.next(courses)
    })
    return $courses
  }

  removeCourse(name: string): void
  {
    const courses = JSON.parse(localStorage.getItem('courses') || '');
    const index = courses.map((el: any) => el.name).indexOf(name);
    courses.splice(index, 1);
    localStorage.setItem('courses', JSON.stringify(courses));
  }

  addCourse(course: course): void
  {
    const courses = JSON.parse(localStorage.getItem('courses') || '');
    courses.push(course);
    localStorage.setItem('courses', JSON.stringify(courses));
  }
}
