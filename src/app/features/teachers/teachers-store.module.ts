import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { teachersFeatureKey, reducer } from './store/teachers.reducer';
import { TeachersEffects } from './store/teachers.effects';
import { EffectsModule } from '@ngrx/effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(teachersFeatureKey, reducer),
    EffectsModule.forFeature([TeachersEffects])
  ]
})
export class TeachersStoreModule { }
