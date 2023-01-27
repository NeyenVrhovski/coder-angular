import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { course } from 'src/app/shared/interfaces/course';
import Swal from 'sweetalert2';
import { createCourse } from '../../store/courses.actions';
import { Store } from '@ngrx/store';
import { createSuccess } from '../../store/courses.selectors';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public errors: {
    name: boolean,
    teacher: boolean,
    price: boolean,
    format: boolean,
  };

  courses: course[];
  loading: boolean;
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private store: Store
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
    
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  handleSubmit()
  {
    
    if(this.form.valid)
    {
      this.loading = true;
      this.subscription?.unsubscribe();
      this.store.dispatch(createCourse({course: this.form.value}));
      this.subscription = this.store.select(createSuccess).subscribe((res) => {
        if(res !== null)
        {
          this.loading = res;
          Swal.fire({
            title: 'Curso Ingresado!',
            text: 'Ya se guardaron los datos del curso.',
            icon: 'success',
            confirmButtonText: 'Cerrar'
          })
        }
      })
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
