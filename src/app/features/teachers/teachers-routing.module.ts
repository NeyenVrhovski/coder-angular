import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeachersFormComponent } from './pages/teachers-form/teachers-form.component';
import { TeachersComponent } from './pages/teachers/teachers.component';

const routes: Routes = [
  { path: '', component: TeachersComponent},
  { path: 'new', component: TeachersFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeachersRoutingModule { }
