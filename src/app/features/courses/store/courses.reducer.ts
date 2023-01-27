import { Action, createReducer, on } from '@ngrx/store';
import { course } from 'src/app/shared/interfaces/course';
import * as CoursesActions from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface State {
  data: course[],
  loading: boolean | null
}

export const initialState: State = {
  data: [],
  loading: null
};

export const reducer = createReducer(
  initialState,

  on(CoursesActions.loadCourses, state => state),
  on(CoursesActions.loadCoursesSuccess, (state, action) => {
    return {
      ...state,
      data: action.data
    }
  }),
  on(CoursesActions.loadCoursesFailure, (state) => state),

  on(CoursesActions.removeCourse, state => state),
  on(CoursesActions.removeCoursesuccess, state => state),
  on(CoursesActions.removeCourseFailure, state => state),

  on(CoursesActions.createCourse, state => state),
  on(CoursesActions.createCoursesuccess, (state) => {
    return {
      ...state,
      loading: false
    }
  }),
  on(CoursesActions.createCourseFailure, (state) => {
    return {
      ...state,
      loading: false
    }
  }),

  on(CoursesActions.cleanCourses, state => initialState),
);


