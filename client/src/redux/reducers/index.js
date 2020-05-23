import { combineReducers } from 'redux';
import auth from './auth';
import config from './config';
import alert from './alert';
import message from './message';

export default combineReducers({
  auth,
  alert,
  config,
  message
});
