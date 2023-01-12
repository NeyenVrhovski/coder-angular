import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean

  constructor(
    private _login: LoginService,
    private router: Router
  ) {
   }

  ngOnInit(): void {
    if(localStorage.getItem('user'))
    {
      this.loggedIn = true;
    }
    else
    {
      this.loggedIn = false;
    }
    document.addEventListener('login', () => {
      this.loggedIn = true
    })
    document.addEventListener('logout', () => {
      this.loggedIn = false
    })
  }

  handleLogout(): void
  {
    this._login.logout();
    this.router.navigate(['']);
  }
}
