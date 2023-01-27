import { createAction, props } from '@ngrx/store';
import { course } from 'src/app/shared/interfaces/course';

export const loadCourses = createAction(
  '[Courses] Load Courses'
);

export const loadCoursesSuccess = createAction(
  '[Courses] Load Courses Success',
  props<{ data: course[] }>()
);

export const loadCoursesFailure = createAction(
  '[Courses] Load Courses Failure',
  props<{ error: any }>()
);

export const cleanCourses = createAction(
  '[Courses] Clean Courses'
);

export const removeCourse = createAction(
  '[Courses] Remove Course',
  props<{ course: course }>()
);

export const removeCoursesuccess = createAction(
  '[Courses] Remove Course Success'
);

export const removeCourseFailure = createAction(
  '[Courses] Remove Course Failure',
  props<{ error: any }>()
);

export const createCourse = createAction(
  '[Courses] Create Course',
  props<{ course: course }>()
);

export const createCoursesuccess = createAction(
  '[Courses] Create Course Success'
);

export const createCourseFailure = createAction(
  '[Courses] Create Course Failure',
  props<{ error: any }>()
);
