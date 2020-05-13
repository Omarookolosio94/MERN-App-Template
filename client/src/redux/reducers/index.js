import { combineReducers } from 'redux';
import auth from './auth';
import config from './config';
import alert from './alert';

export default combineReducers({
  auth,
  alert,
  config
});
