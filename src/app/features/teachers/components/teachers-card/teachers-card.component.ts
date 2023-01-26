import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { teacher } from 'src/app/shared/interfaces/teacher';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-teachers-card',
  templateUrl: './teachers-card.component.html',
  styleUrls: ['./teachers-card.component.scss']
})
export class TeachersCardComponent {
  @Input() teacher: teacher;
  clicked: boolean;
  teachers: teacher[];
  event: Event;
  subscription: Subscription;

  constructor(
    private _teachers: TeachersService
  ) {
    this.clicked = false;
    this.event = new Event('teachersUpdate');
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
      console.log(res)
      if(res.isConfirmed)
      {
        this.subscription?.unsubscribe();
        this.subscription = this._teachers.removeTeacher(this.teacher).subscribe((res) => {
          document.dispatchEvent(this.event);
        })
      }
    })
  }
}
