import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public form: FormGroup;
  public errors: {
    nombre: boolean,
    apellido: boolean,
    dni: boolean,
    email: boolean,
    fecha_de_nacimiento: boolean,
    carrera: boolean
  }

  loading: boolean

  constructor(
    private fb: FormBuilder
  ) { 
    this.loading = false
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      genero: [''],
      dni: ['', Validators.minLength(7)],
      email: ['', Validators.email],
      fecha_de_nacimiento: ['', Validators.required],
      carrera: ['', Validators.required],
      catedra: ['']
    })
    this.errors = {
      nombre: false,
      apellido: false,
      dni: false,
      email: false,
      fecha_de_nacimiento: false,
      carrera: false
    }
  }

  ngOnInit(): void {
  
  }

  handleSubmit()
  {
    if(this.form.valid)
    {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        Swal.fire({
          title: 'Informacion Enviada!',
          text: 'Ya recibimos tus datos, nos comunicaremos con vos a la brevedad',
          icon: 'success',
          confirmButtonText: 'Cerrar'
        })
      },2000)
    }
    else
    {
      if(this.form.get('nombre')?.invalid)
      {
        this.errors.nombre = true;
      }
      else
      {
        this.errors.nombre = false
      }
      if(this.form.get('apellido')?.invalid)
      {
        this.errors.apellido = true;
      }
      else
      {
        this.errors.apellido = false
      }
      if(this.form.get('dni')?.invalid)
      {
        this.errors.dni = true;
      }
      else
      {
        this.errors.dni = false
      }
      if(this.form.get('email')?.invalid)
      {
        this.errors.email = true;
      }
      else
      {
        this.errors.email = false
      }
      if(this.form.get('fecha_de_nacimiento')?.invalid)
      {
        this.errors.fecha_de_nacimiento = true;
      }
      else
      {
        this.errors.fecha_de_nacimiento = false
      }
      if(this.form.get('carrera')?.invalid)
      {
        this.errors.carrera = true;
      }
      else
      {
        this.errors.carrera = false
      }
    }
  }
}
