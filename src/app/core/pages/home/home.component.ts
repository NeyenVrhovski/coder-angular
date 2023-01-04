import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void {
    if(localStorage.getItem('students') == null)
    {
      localStorage.setItem('students', JSON.stringify([]))
    }
    if(localStorage.getItem('teachers') == null)
    {
      localStorage.setItem('teachers', JSON.stringify([]))
    }
    if(localStorage.getItem('courses') == null)
    {
      localStorage.setItem('courses', JSON.stringify([]))
    }
  }

}
