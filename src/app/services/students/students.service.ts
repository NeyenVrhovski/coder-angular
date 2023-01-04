import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from 'src/app/shared/interfaces/student';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor( ) { 

  }

  getAll(): Observable<any>{
    const students: student[] = JSON.parse(localStorage.getItem('students') || '')
    const $students = new Observable(obs => {
      obs.next(students)
    })
    return $students
  }
}
