import axios from 'axios';
import setAuthToken from '../../utils/token/setAuthToken';
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  AUTH_ERROR,
  LOGIN_FAIL,
  CLEAR_USER_PROFILE,
  LOGIN_SUCCESS
} from './types';
import Toast from '../../utils/toast/Toast';

//Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('/api/matrix/auth');
    dispatch({
      type: USER_LOGGED_IN,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    });
  }
};

//Login User
export const loginAccount = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/matrix/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());

    Toast({ msg: 'Welcome Back', type: 'success' });
  } catch (err) {
    Toast({ msg: err.response.data.error, type: 'danger' });

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

//LogOut User
export const logoutAccount = () => async (dispatch) => {
  dispatch({
    type: USER_LOGGED_OUT
  });
  Toast({ msg: 'Logged Out of Account See You Later', type: 'success' });
};
