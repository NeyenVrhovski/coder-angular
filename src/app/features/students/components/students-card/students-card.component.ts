import { Component, Input } from '@angular/core';
import { student } from '../../../../shared/interfaces/student';
import Swal from 'sweetalert2';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { removeStudent } from '../../store/students.actions';
@Component({
  selector: 'app-students-card',
  templateUrl: './students-card.component.html',
  styleUrls: ['./students-card.component.scss']
})
export class StudentsCardComponent {

  @Input() student: student;
  clicked: boolean;
  subscription: Subscription

  constructor(
    private store: Store
  ) {
    this.clicked = false;
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
        this.store.dispatch(removeStudent({student: this.student}))
      }
    });
  }
}
