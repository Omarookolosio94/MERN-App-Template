import axios from 'axios';
import setAuthToken from '../../utils/token/setAuthToken';
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  AUTH_ERROR,
  LOGIN_FAIL,
  CLEAR_USER_PROFILE
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

//LogOut User
export const logoutAccount = () => async (dispatch) => {
  dispatch({
    type: USER_LOGGED_OUT
  });

  Toast({ msg: 'Success', type: 'success' });
};
