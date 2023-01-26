import { createAction, props } from '@ngrx/store';
import { student } from 'src/app/shared/interfaces/student';

export const loadStudents = createAction(
  '[Students] Load Students'
);

export const loadStudentsSuccess = createAction(
  '[Students] Load Students Success',
  props<{ data: student[] }>()
);

export const loadStudentsFailure = createAction(
  '[Students] Load Students Failure',
  props<{ error: any }>()
);

export const cleanStudents = createAction(
  '[Students] Clean Students'
);

export const removeStudent = createAction(
  '[Students] Remove Student',
  props<{ student: student }>()
);

export const removeStudentSuccess = createAction(
  '[Students] Remove Student Success'
);

export const removeStudentFailure = createAction(
  '[Students] Remove Student Failure',
  props<{ error: any }>()
);

export const createStudent = createAction(
  '[Students] Create Student',
  props<{ student: student }>()
);

export const createStudentSuccess = createAction(
  '[Students] Create Student Success'
);

export const createStudentFailure = createAction(
  '[Students] Create Student Failure',
  props<{ error: any }>()
);

