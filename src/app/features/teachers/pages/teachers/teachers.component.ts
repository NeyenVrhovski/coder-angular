import { Component } from '@angular/core';
import { teacher } from 'src/app/shared/interfaces/teacher';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { cleanTeachers, loadTeachers } from '../../store/teachers.actions';
import { selectTeachersArray } from '../../store/teachers.selectors';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent {

  teachers: teacher[];
  clicked: number;
  subscription: Subscription;

  constructor(
    private store: Store
  ) { 
    
  }

  ngOnInit(): void {
    this.store.dispatch(loadTeachers());
    this.subscription = this.store.select(selectTeachersArray).subscribe((res) => {
      this.teachers = res;
    })
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
    this.store.dispatch(cleanTeachers());
  }

}
