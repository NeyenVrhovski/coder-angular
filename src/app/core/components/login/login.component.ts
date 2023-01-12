import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public form: FormGroup;
  public errors: {
    email: boolean,
    password: boolean,
  };

  loading: boolean;

  constructor(
    private fb: FormBuilder,
    private _login: LoginService,
    private router: Router
  ) { 
    this.loading = false
    this.form = this.fb.group({
      email: ['', Validators.email],
      password: ['', Validators.required],
    })
    this.errors = {
      email: false,
      password: false,
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
        this._login.login(this.form.value);
        this.loading = false;
        this.router.navigate(['']);
      },2000)
    }
    else
    {
      if(this.form.get('email')?.invalid)
      {
        this.errors.email = true;
      }
      else
      {
        this.errors.email = false
      }
      if(this.form.get('password')?.invalid)
      {
        this.errors.password = true;
      }
      else
      {
        this.errors.password = false
      }
    }
  }
}
