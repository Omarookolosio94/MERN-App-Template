import {
  USER_LOGGED_OUT,
  USER_LOGGED_IN,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGGING_IN
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
  user: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: payload
      };
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.data);
      return {
        ...state,
        ...payload,
        isAuthenticated: true
      };
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null
      };
    case LOGIN_FAIL:
    case USER_LOGGED_OUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        user: null
      };
    case LOGGING_IN:
      return {
        ...state,
        loading: payload
      };
    default:
      return state;
  }
}
