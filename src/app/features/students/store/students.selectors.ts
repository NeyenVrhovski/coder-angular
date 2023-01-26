import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromStudents from './students.reducer';

export const selectStudentsState = createFeatureSelector<fromStudents.State>(
  fromStudents.studentsFeatureKey
);

export const selectStudentsArray = createSelector(
  selectStudentsState,
  (state) => state.data
)

export const createSuccess = createSelector(
  selectStudentsState,
  (state) => state.loading
)
