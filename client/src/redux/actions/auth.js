import axios from 'axios';
import storage from 'local-storage-fallback';
import setAuthToken from '../../utils/token/setAuthToken';
import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  AUTH_ERROR,
  LOGIN_FAIL
} from './types';

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
