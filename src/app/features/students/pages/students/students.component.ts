import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { student } from 'src/app/shared/interfaces/student';
import { StudentsService } from 'src/app/services/students/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnDestroy {

  students: student[];
  clicked: number;
  subscription: Subscription;

  constructor(
    private _students: StudentsService
  ) { 
    
  }

  ngOnInit(): void {
    this.setStudents();
    document.addEventListener('studentsUpdate', () => {
      this.setStudents();
    })
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  setStudents()
  {
    this.subscription?.unsubscribe();
    this.subscription = this._students.getAll().subscribe((res)=> {
      this.students = res
    });
  }

}
