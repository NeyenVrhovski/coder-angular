import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'students', loadChildren: () => import('./features/students/students.module').then(m => m.StudentsModule)},
  { path: 'teachers', loadChildren: () => import('./features/teachers/teachers.module').then(m => m.TeachersModule)},
  { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
