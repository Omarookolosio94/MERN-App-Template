import { USER_LOGGED_OUT, USER_LOGGED_IN, AUTH_ERROR } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: null
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload
      };
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
        user: null
      };
    default:
      return state;
  }
}
