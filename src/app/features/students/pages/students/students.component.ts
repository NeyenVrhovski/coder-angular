import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { student } from 'src/app/shared/interfaces/student';
import { StudentsService } from 'src/app/services/students/students.service';
import { Store } from '@ngrx/store';
import { loadStudents, cleanStudents } from '../../store/students.actions';
import { selectStudentsArray } from '../../store/students.selectors';

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
    private store: Store
  ) { 
    
  }

  ngOnInit(): void {
    this.store.dispatch(loadStudents());
    this.subscription = this.store.select(selectStudentsArray).subscribe((res) => {
      this.students = res;
    })
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
    this.store.dispatch(cleanStudents())
  }

}
