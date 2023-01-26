import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTeachers from './teachers.reducer';

export const selectTeachersState = createFeatureSelector<fromTeachers.State>(
  fromTeachers.teachersFeatureKey
);

export const selectTeachersArray = createSelector(
  selectTeachersState,
  (state) => state.data
)

export const createSuccess = createSelector(
  selectTeachersState,
  (state) => state.loading
)