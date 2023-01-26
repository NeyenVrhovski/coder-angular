import { Action, createReducer, on } from '@ngrx/store';
import { teacher } from 'src/app/shared/interfaces/teacher';
import * as TeachersActions from './teachers.actions';

export const teachersFeatureKey = 'teachers';

export interface State {
  data: teacher[],
  loading: boolean | null
}

export const initialState: State = {
  data: [],
  loading: null
};

export const reducer = createReducer(
  initialState,

  on(TeachersActions.loadTeachers, state => state),
  on(TeachersActions.loadTeachersSuccess, (state, action) => {
    return {
      ...state,
      data: action.data
    }
  }),
  on(TeachersActions.loadTeachersFailure, (state) => state),

  on(TeachersActions.removeTeacher, state => state),
  on(TeachersActions.removeTeachersuccess, state => state),
  on(TeachersActions.removeTeacherFailure, state => state),

  on(TeachersActions.createTeacher, state => state),
  on(TeachersActions.createTeachersuccess, (state) => {
    return {
      ...state,
      loading: false
    }
  }),
  on(TeachersActions.createTeacherFailure, (state) => {
    return {
      ...state,
      loading: false
    }
  }),

  on(TeachersActions.cleanTeachers, state => initialState),

);
