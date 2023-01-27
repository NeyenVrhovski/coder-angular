import { Component } from '@angular/core';
import { course } from 'src/app/shared/interfaces/course';
import { Subscription } from 'rxjs';
import { CoursesService } from 'src/app/services/courses/courses.service';
import Swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { cleanCourses, loadCourses, removeCourse } from '../../store/courses.actions';
import { selectCoursesArray } from '../../store/courses.selectors';

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
    private _courses: CoursesService,
    private store: Store
  ) { 
    this.event = new Event('studentsUpdate');
  }

  ngOnInit(): void {
    this.store.dispatch(loadCourses());
    this.subscription = this.store.select(selectCoursesArray).subscribe((res) => {
      this.courses = res;
    })
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
    this.store.dispatch(cleanCourses());
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
        this.store.dispatch(removeCourse({course: course}))
      }
    });
  }
}
