import { Component } from '@angular/core';
import { course } from 'src/app/shared/interfaces/course';
import { Subscription } from 'rxjs';
import { CoursesService } from 'src/app/services/courses/courses.service';
import Swal from 'sweetalert2';
import { CanUpdateErrorState } from '@angular/material/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses: course[];
  subscription: Subscription;
  event: Event
  columns = ['name', 'teacher', 'price', 'format', 'delete'];

  constructor(
    private _courses: CoursesService
  ) { 
    this.event = new Event('studentsUpdate');
  }

  ngOnInit(): void {
    this.setCourses();
    document.addEventListener('coursesUpdate', () => {
      this.setCourses();
    })
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  setCourses()
  {
    this.subscription?.unsubscribe();
    this.subscription = this._courses.getAll().subscribe((res)=> {
      this.courses = res;
    });
  }

  removeCourse(course: course)
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
        this._courses.removeCourse(course.name)
        this.setCourses();
      }
    });
  }
}
