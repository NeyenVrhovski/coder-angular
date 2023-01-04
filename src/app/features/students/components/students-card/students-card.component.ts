import { Component, Input } from '@angular/core';
import { student } from '../../../../shared/interfaces/student';

@Component({
  selector: 'app-card',
  templateUrl: './students-card.component.html',
  styleUrls: ['./students-card.component.scss']
})
export class StudentsCardComponent {

  @Input() student: student;
  clicked: boolean;
  students: student[];
  event: Event

  constructor() {
    this.clicked = false;
    this.event = new Event('studentsUpdate');
  }

  removeStudent()
  {
    const students = JSON.parse(localStorage.getItem('students') || '');
    const index = students.map((el: any) => el.document).indexOf(this.student.document);
    students.splice(index, 1);
    localStorage.setItem('students', JSON.stringify(students));
    document.dispatchEvent(this.event);
  }
}
