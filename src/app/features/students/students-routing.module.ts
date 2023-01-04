import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsFormComponent } from './pages/students-form/students-form.component';
import { StudentsComponent } from './pages/students/students.component';

const routes: Routes = [
  { path: '', component: StudentsComponent},
  { path: 'new', component: StudentsFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
