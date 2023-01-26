import { createAction, props } from '@ngrx/store';
import { teacher } from 'src/app/shared/interfaces/teacher';

export const loadTeachers = createAction(
  '[Teachers] Load Teachers'
);

export const loadTeachersSuccess = createAction(
  '[Teachers] Load Teachers Success',
  props<{ data: teacher[] }>()
);

export const loadTeachersFailure = createAction(
  '[Teachers] Load Teachers Failure',
  props<{ error: any }>()
);

export const cleanTeachers = createAction(
  '[Teachers] Clean Teachers'
);

export const removeTeacher = createAction(
  '[Teachers] Remove Teacher',
  props<{ teacher: teacher }>()
);

export const removeTeachersuccess = createAction(
  '[Teachers] Remove Teacher Success'
);

export const removeTeacherFailure = createAction(
  '[Teachers] Remove Teacher Failure',
  props<{ error: any }>()
);

export const createTeacher = createAction(
  '[Teachers] Create Teacher',
  props<{ teacher: teacher }>()
);

export const createTeachersuccess = createAction(
  '[Teachers] Create Teacher Success'
);

export const createTeacherFailure = createAction(
  '[Teachers] Create Teacher Failure',
  props<{ error: any }>()
);
