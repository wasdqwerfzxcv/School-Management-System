import {
  TEACHER_DELETE_FAIL,
  TEACHER_DELETE_REQUEST,
  TEACHER_DELETE_SUCCESS,
  TEACHER_LIST_FAIL,
  TEACHER_LIST_REQUEST,
  TEACHER_LIST_RESET,
  TEACHER_LIST_SUCCESS,
  TEACHER_REGISTER_FAIL,
  TEACHER_REGISTER_REQUEST,
  TEACHER_REGISTER_RESET,
  TEACHER_REGISTER_SUCCESS,
  TEACHER_SALARY_FAIL,
  TEACHER_SALARY_REQUEST,
  TEACHER_SALARY_RESET,
  TEACHER_SALARY_SUCCESS,
  TEACHER_SEARCH_FAIL,
  TEACHER_SEARCH_REQUEST,
  TEACHER_SEARCH_SUCCESS,
  TEACHER_UPDATE_FAIL,
  TEACHER_UPDATE_REQUEST,
  TEACHER_UPDATE_SUCCESS,
  TEACHER_ATTENDANCE_FAIL,
  TEACHER_ATTENDANCE_REQUEST,
  TEACHER_ATTENDANCE_RESET,
  TEACHER_ATTENDANCE_SUCCESS,
} from "../constants/teacherConstants";

export const teacherSalaryReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_SALARY_REQUEST:
      return { loading: true };
    case TEACHER_SALARY_SUCCESS:
      return { loading: false, success: action.payload };
    case TEACHER_SALARY_FAIL:
      return { loading: false, error: action.payload };
    case TEACHER_SALARY_RESET:
      return {};
    default:
      return state;
  }
};

//following displays teacher details
export const teacherDetailsReducer = (state = { teacher: {} }, action) => {
  switch (action.type) {
    case TEACHER_SEARCH_REQUEST:
      return { loading: true, teacher: {} };
    case TEACHER_SEARCH_SUCCESS:
      return { loading: false, teacher: action.payload };
    case TEACHER_SEARCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//FOLLOWING IS FOR UPDATE THE TEACHER DETAILS

export const teacherUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_UPDATE_REQUEST:
      return { loading: true };
    case TEACHER_UPDATE_SUCCESS:
      return { loading: false, success: action.payload };
    case TEACHER_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//TEACHER REGISTER REDUCER
export const teacherRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_REGISTER_REQUEST:
      return { loading: true };
    case TEACHER_REGISTER_SUCCESS:
      return { loading: false, success: action.payload };
    case TEACHER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    case TEACHER_REGISTER_RESET:
      return {};
    default:
      return state;
  }
};

export const teacherDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case TEACHER_DELETE_REQUEST:
      return { loading: true };
    case TEACHER_DELETE_SUCCESS:
      return { loading: false, success: action.payload };
    case TEACHER_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const teacherListReducer = (state = { teachers: [] }, action) => {
  switch (action.type) {
    case TEACHER_LIST_REQUEST:
      return { loading: true, teachers: [] };
    case TEACHER_LIST_SUCCESS:
      return { loading: false, teachers: action.payload };
    case TEACHER_LIST_FAIL:
      return { loading: false, error: action.payload };
    case TEACHER_LIST_RESET:
      return {};
    default:
      return state;
  }
};

export const teacherAttendanceReducer = (state = { teachers: [] }, action) => {
  switch (action.type) {
    case TEACHER_ATTENDANCE_REQUEST:
      return { loading: true };
    case TEACHER_ATTENDANCE_SUCCESS:
      return { loading: false, teachers: action.payload };
    case TEACHER_ATTENDANCE_FAIL:
      return { loading: false, error: action.payload };
    case TEACHER_ATTENDANCE_RESET:
      return {};
    default:
      return state;
  }
};