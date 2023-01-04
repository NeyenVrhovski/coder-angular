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

  removeStudent(document: number): void
  {
    const students = JSON.parse(localStorage.getItem('students') || '');
    const index = students.map((el: any) => el.document).indexOf(document);
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
  }

  addStudent(student: student): void
  {
    const students = JSON.parse(localStorage.getItem('students') || '');
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));
  }
}
