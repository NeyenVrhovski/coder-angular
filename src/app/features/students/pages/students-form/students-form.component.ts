import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { StudentsService } from 'src/app/services/students/students.service';
import { student } from 'src/app/shared/interfaces/student';
import Swal from 'sweetalert2';
import { createStudent } from '../../store/students.actions';
import { createSuccess } from '../../store/students.selectors';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss']
})
export class StudentsFormComponent implements OnInit {

  public form: FormGroup;
  public errors: {
    firstname: boolean,
    lastname: boolean,
    document: boolean,
    email: boolean,
    admissionDate: boolean,
    grade: boolean,
    note: boolean,
    debt: boolean
  };

  students: student[];
  loading: boolean;
  subscription: Subscription;

  constructor(
    private fb: FormBuilder,
    private _student: StudentsService,
    private store: Store
  ) { 
    this.loading = false
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      document: ['', Validators.minLength(7)],
      admissionDate: ['', Validators.required],
      grade: ['', Validators.required],
      note: ['', [Validators.required, Validators.max(10), Validators.min(1)]],
      debt: ['', Validators.min(0)]
    })
    this.errors = {
      firstname: false,
      lastname: false,
      document: false,
      email: false,
      admissionDate: false,
      grade: false,
      note: false,
      debt: false
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
      this.store.dispatch(createStudent({student: this.form.value}));
      this.subscription = this.store.select(createSuccess).subscribe((res) => {
        if(res !== null)
        {
          this.loading = res;
          Swal.fire({
            title: 'Alumno Ingresado!',
            text: 'Ya se guardaron los datos del alumno.',
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
      if(this.form.get('grade')?.invalid)
      {
        this.errors.grade = true;
      }
      else
      {
        this.errors.grade = false
      }
      if(this.form.get('note')?.invalid)
      {
        this.errors.note = true;
      }
      else
      {
        this.errors.note = false
      }
      if(this.form.get('debt')?.invalid)
      {
        this.errors.debt = true;
      }
      else
      {
        this.errors.debt = false
      }
    }
  }
}
