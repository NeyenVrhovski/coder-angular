import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './pages/students/students.component';
import { StudentsFormComponent } from './pages/students-form/students-form.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentsCardComponent } from './components/students-card/students-card.component';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsFormComponent,
    StudentsCardComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    StudentsComponent,
  ]
  
})
export class StudentsModule { }
