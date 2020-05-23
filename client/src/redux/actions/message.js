import { SENDING_MSG_SUCCESS, SENDING_MSG, SUCCESS } from './types';
import Toast from '../../utils/toast/Toast';
import axios from 'axios';

//Send Message
export const sendMessage = (data) => async (dispatch) => {
  sendMessage(true);

  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify(data);

  try {
    dispatch(sendingMsg(true));
    const res = await axios.post('/api/matrix/contact', body, config);
    if (res.data.success === true) {
      dispatch(success(true));
      Toast({ msg: res.data.data, type: 'success' });
      dispatch(success(null));
      dispatch(sendingMsg(false));
    }
  } catch (err) {
    Toast({ msg: err.response.data.error, type: 'danger' });
    dispatch(sendingMsg(false));
    dispatch(success(null));
  }
};

export const sendingMsg = (data) => async (dispatch) => {
  dispatch({
    type: SENDING_MSG,
    payload: data
  });
};

export const success = (data) => async (dispatch) => {
  dispatch({
    type: SUCCESS,
    payload: data
  });
};
