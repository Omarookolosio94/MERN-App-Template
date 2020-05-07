import config from '../../utils/default/config';

const initialState = {
  ...config
};

export default function (state = initialState, action) {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
}
