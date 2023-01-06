import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CoursesService } from 'src/app/services/courses/courses.service';
import { course } from 'src/app/shared/interfaces/course';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent {
  public form: FormGroup;
  public errors: {
    name: boolean,
    teacher: boolean,
    price: boolean,
    format: boolean,
  };

  courses: course[];
  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private _courses: CoursesService
  ) { 
    this.loading = false
    this.form = this.fb.group({
      name: ['', Validators.required],
      teacher: ['', Validators.required],
      price: ['', Validators.min(0)],
      format: ['0', Validators.minLength(2)],
    })
    this.errors = {
      name: false,
      teacher: false,
      price: false,
      format: false,
    }
  }

  ngOnInit(): void {
    this.courses = JSON.parse(localStorage.getItem('courses') || '');
  }

  handleSubmit()
  {
    
    if(this.form.valid)
    {
      this.loading = true;
      setTimeout(() => {
        this._courses.addCourse(this.form.value);
        this.loading = false;
        Swal.fire({
          title: 'Curso Ingresado!',
          text: 'Ya se guardaron los datos del curso.',
          icon: 'success',
          confirmButtonText: 'Cerrar'
        })
      },2000)
    }
    else
    {
      if(this.form.get('name')?.invalid)
      {
        this.errors.name = true;
      }
      else
      {
        this.errors.name = false
      }
      if(this.form.get('teacher')?.invalid)
      {
        this.errors.teacher = true;
      }
      else
      {
        this.errors.teacher = false
      }
      if(this.form.get('price')?.invalid)
      {
        this.errors.price = true;
      }
      else
      {
        this.errors.price = false
      }
      if(this.form.get('format')?.invalid)
      {
        this.errors.format = true;
      }
      else
      {
        this.errors.format = false
      }
    }
  }
}
