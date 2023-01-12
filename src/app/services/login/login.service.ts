import { Injectable } from '@angular/core';
import { login } from 'src/app/shared/interfaces/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginEvent: Event;
  logoutEvent: Event

  constructor() {
    this.loginEvent = new Event('login');
    this.logoutEvent = new Event('logout')
   }

  login(data: login): void
  {
    localStorage.setItem('user', JSON.stringify(data));
    document.dispatchEvent(this.loginEvent);
  }

  logout(): void
  {
    localStorage.removeItem('user');
    document.dispatchEvent(this.logoutEvent);
    
  }
}
