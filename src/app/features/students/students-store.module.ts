import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StudentsEffects } from './store/students.effects';
import { StoreModule } from '@ngrx/store';
import { studentsFeatureKey, reducer } from './store/students.reducer';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(studentsFeatureKey, reducer),
    EffectsModule.forFeature([StudentsEffects])
  ]
})
export class StudentsStoreModule { }
