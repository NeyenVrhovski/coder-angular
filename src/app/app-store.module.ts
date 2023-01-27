import { NgModule, isDevMode } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StudentsStoreModule } from './features/students/students-store.module';
import { TeachersStoreModule } from './features/teachers/teachers-store.module';
import { CoursesStoreModule } from './features/courses/courses-store.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({}, {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: !isDevMode()}),
    StudentsStoreModule,
    TeachersStoreModule,
    CoursesStoreModule
  ]
})
export class AppStoreModule { }
