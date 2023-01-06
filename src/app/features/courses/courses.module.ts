import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './pages/courses/courses.component';
import { CoursesFormComponent } from './pages/courses-form/courses-form.component';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CoursesComponent,
    CoursesFormComponent
  ],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CoursesComponent
  ]
})
export class CoursesModule { }
