import { Component, OnInit } from '@angular/core';
import { student } from 'src/app/interfaces/student';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showForm: boolean;

  constructor() { 
    this.showForm = false;
  }

  ngOnInit(): void {
  }

}
