import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { student } from 'src/app/interfaces/student';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, OnDestroy {

  students: student[];
  clicked: number;
  columnsToDisplay: Array<string>;
  users: Array<any>;
  $users: Observable<any>;
  subscription: Subscription;

  constructor(
    public _users: UserService
  ) { 
    this.columnsToDisplay = ['demo-id', 'demo-first_name', 'demo-last_name', 'demo-email'];
    this.students = [
      {
      firstname: "Victor",
      lastname: "Valdes",
      document: 67463736,
      grade: "Licenciatura en comunicacion",
      admissionDate: "12/05/2020",
      note: 7,
      debt: 2400
      },
      {
        firstname: "Jose",
        lastname: "Perez",
        document: 8919831,
        grade: "Tecnicatura en Programacion Informatica",
        admissionDate: "31/12/2015",
        note: 2,
        debt: 0
      },
      {
        firstname: "Nestor",
        lastname: "Flores",
        document: 9481423,
        grade: "Master en Derecho Constitucional",
        admissionDate: "01/02/2021",
        note: 9,
        debt: 3200
      },
      {
        firstname: "Mauro",
        lastname: "Zarate",
        document: 8937263,
        grade: "Licenciatura en Comercio Exterior",
        admissionDate: "20/11/2018",
        note: 6,
        debt: 1000
      },{
        firstname: "Gaston",
        lastname: "Gutierrez",
        document: 78274872,
        grade: "Tecnicatura en radioimagenes",
        admissionDate: "06/07/2009",
        note: 8,
        debt: 7500
      },{
        firstname: "Flavio",
        lastname: "Rodriguez",
        document: 824681,
        grade: "Master en Gestion Empresarial",
        admissionDate: "25/09/2012",
        note: 10,
        debt: 2200
      }]
  }

  ngOnInit(): void {
    this.subscription = this._users.getAll().subscribe((res)=> {
      this.users = res;
    });

    this.$users = this._users.getAll();

  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

}
