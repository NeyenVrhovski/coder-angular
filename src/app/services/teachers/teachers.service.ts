import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { teacher } from 'src/app/shared/interfaces/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {

  constructor() { }

  getAll(): Observable<any>{
    const teachers: teacher[] = JSON.parse(localStorage.getItem('teachers') || '')
    const $teachers = new Observable(obs => {
      obs.next(teachers)
    })
    return $teachers
  }

  removeTeacher(document: number): void
  {
    const teachers = JSON.parse(localStorage.getItem('teachers') || '');
    const index = teachers.map((el: any) => el.document).indexOf(document);
    teachers.splice(index, 1);
    localStorage.setItem('teachers', JSON.stringify(teachers));
  }

  addTeacher(teacher: teacher): void
  {
    const teachers = JSON.parse(localStorage.getItem('teachers') || '');
    teachers.push(teacher);
    localStorage.setItem('teachers', JSON.stringify(teachers));
  }
}
