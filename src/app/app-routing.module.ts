import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { HomeComponent } from './core/pages/home/home.component';
import { AuthGuard } from './core/guards/auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'students', loadChildren: () => import('./features/students/students.module').then(m => m.StudentsModule), canActivate: [AuthGuard]},
  { path: 'teachers', loadChildren: () => import('./features/teachers/teachers.module').then(m => m.TeachersModule), canActivate: [AuthGuard]},
  { path: 'courses', loadChildren: () => import('./features/courses/courses.module').then(m => m.CoursesModule), canActivate: [AuthGuard]},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
