import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  loggedIn: boolean;

  constructor() {
    this.loggedIn = false;
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

}
