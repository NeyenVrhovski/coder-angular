import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { TeachersService } from 'src/app/services/teachers/teachers.service';
import { teacher } from 'src/app/shared/interfaces/teacher';
import { createSuccess } from '../../store/teachers.selectors';
import Swal from 'sweetalert2';
import { createTeacher } from '../../store/teachers.actions';

@Component({
  selector: 'app-teachers-form',
  templateUrl: './teachers-form.component.html',
  styleUrls: ['./teachers-form.component.scss']
})
export class TeachersFormComponent implements OnInit {
  public form: FormGroup;
  public errors: {
    firstname: boolean,
    lastname: boolean,
    document: boolean,
    admissionDate: boolean,
    course: boolean,
    salary: boolean
  };

  teachers: teacher[];
  loading: boolean;
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private _teachers: TeachersService,
    private store: Store
  ) { 
    this.loading = false
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      document: ['', Validators.minLength(7)],
      admissionDate: ['', Validators.required],
      course: ['', Validators.required],
      salary: ['', Validators.min(0)]
    })
    this.errors = {
      firstname: false,
      lastname: false,
      document: false,
      admissionDate: false,
      course: false,
      salary: false
    }
  }

  ngOnInit(): void {
   
  }

  handleSubmit()
  {
    if(this.form.valid)
    {
      this.loading = true;
      this.subscription?.unsubscribe();
      this.store.dispatch(createTeacher({teacher: this.form.value}));
      this.subscription = this.store.select(createSuccess).subscribe((res) => {
        if(res !== null)
        {
          this.loading = false;
          Swal.fire({
            title: 'Profesor Ingresado!',
            text: 'Ya se guardaron los datos del profesor.',
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
        this.errors.firstname = true;
      }
      else
      {
        this.errors.firstname = false
      }
      if(this.form.get('lastname')?.invalid)
      {
        this.errors.lastname = true;
      }
      else
      {
        this.errors.lastname = false
      }
      if(this.form.get('document')?.invalid)
      {
        this.errors.document = true;
      }
      else
      {
        this.errors.document = false
      }
      if(this.form.get('admissionDate')?.invalid)
      {
        this.errors.admissionDate = true;
      }
      else
      {
        this.errors.admissionDate = false
      }
      if(this.form.get('salary')?.invalid)
      {
        this.errors.salary = true;
      }
      else
      {
        this.errors.salary = false
      }
      if(this.form.get('course')?.invalid)
      {
        this.errors.course = true;
      }
      else
      {
        this.errors.course = false
      }
    }
  }
}
