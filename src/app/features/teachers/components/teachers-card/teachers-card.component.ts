import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { teacher } from 'src/app/shared/interfaces/teacher';
import Swal from 'sweetalert2';
import { removeTeacher } from '../../store/teachers.actions';


@Component({
  selector: 'app-teachers-card',
  templateUrl: './teachers-card.component.html',
  styleUrls: ['./teachers-card.component.scss']
})
export class TeachersCardComponent {
  @Input() teacher: teacher;
  clicked: boolean;
  teachers: teacher[];
  subscription: Subscription;

  constructor(
    private store: Store
  ) {
    this.clicked = false;
  }

  removeTeacher()
  {
    Swal.fire({
      title: 'Cuidado!',
      text: 'Estas seguro de querer borrar este profesor?',
      icon: 'warning',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
      showCancelButton: true
    }).then((res) => {
      if(res.isConfirmed)
      {
        this.store.dispatch(removeTeacher({teacher: this.teacher}))
      }
    })
  }
}
