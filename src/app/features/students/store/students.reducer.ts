import { Action, createReducer, on } from '@ngrx/store';
import * as StudentsActions from './students.actions';
import { student } from 'src/app/shared/interfaces/student';

export const studentsFeatureKey = 'students';

export interface State {
  data: student[],
  loading: boolean | null
}

export const initialState: State = {
  data: [],
  loading: null
};

export const reducer = createReducer(
  initialState,

  on(StudentsActions.loadStudents, state => state),
  on(StudentsActions.loadStudentsSuccess, (state, action) => {
    return {
      ...state,
      data: action.data
    }
  }),
  on(StudentsActions.loadStudentsFailure, (state) => state),

  on(StudentsActions.removeStudent, state => state),
  on(StudentsActions.removeStudentSuccess, state => state),
  on(StudentsActions.removeStudentFailure, state => state),

  on(StudentsActions.createStudent, state => state),
  on(StudentsActions.createStudentSuccess, (state) => {
    return {
      ...state,
      loading: false
    }
  }),
  on(StudentsActions.createStudentFailure, (state) => {
    return {
      ...state,
      loading: false
    }
  }),

  on(StudentsActions.cleanStudents, state => initialState),
);
