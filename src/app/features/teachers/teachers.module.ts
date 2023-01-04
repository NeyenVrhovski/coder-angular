import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersRoutingModule } from './teachers-routing.module';
import { TeachersComponent } from './pages/teachers/teachers.component';
import { TeachersFormComponent } from './pages/teachers-form/teachers-form.component';
import { TeachersCardComponent } from './components/teachers-card/teachers-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeachersComponent,
    TeachersFormComponent,
    TeachersCardComponent
  ],
  imports: [
    CommonModule,
    TeachersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    TeachersComponent
  ]
})
export class TeachersModule { }
