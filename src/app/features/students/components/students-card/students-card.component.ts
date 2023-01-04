import { Component, Input } from '@angular/core';
import { StudentsService } from 'src/app/services/students/students.service';
import { student } from '../../../../shared/interfaces/student';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-students-card',
  templateUrl: './students-card.component.html',
  styleUrls: ['./students-card.component.scss']
})
export class StudentsCardComponent {

  @Input() student: student;
  clicked: boolean;
  event: Event

  constructor(
    private _students: StudentsService
  ) {
    this.clicked = false;
    this.event = new Event('studentsUpdate');
  }

  removeStudent()
  {
    Swal.fire({
      title: 'Cuidado!',
      text: 'Estas seguro de querer borrar este alumno?',
      icon: 'warning',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true
    }).then((res) => {
      if(res.isConfirmed)
      {
        this._students.removeStudent(this.student.document)
        document.dispatchEvent(this.event);
      }
    });
  }
}
