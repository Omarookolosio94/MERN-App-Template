import { SUCCESS, SENDING_MSG } from '../actions/types';

const initialState = {
  message: null,
  messages: [],
  loading: false,
  success: false
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SENDING_MSG:
      return {
        ...state,
        loading: payload
      };
    case SUCCESS:
      return {
        ...state,
        success: payload
      };
    default:
      return state;
  }
}
