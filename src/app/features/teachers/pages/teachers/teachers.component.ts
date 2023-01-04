import { Component } from '@angular/core';
import { teacher } from 'src/app/shared/interfaces/teacher';
import { Subscription } from 'rxjs';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

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
    private _teachers: TeachersService
  ) { 
    
  }

  ngOnInit(): void {
    this.setTeachers();
    document.addEventListener('teachersUpdate', () => {
      this.setTeachers();
    })
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  setTeachers()
  {
    this.subscription?.unsubscribe();
    this.subscription = this._teachers.getAll().subscribe((res)=> {
      this.teachers = res;
    });
  }

}
