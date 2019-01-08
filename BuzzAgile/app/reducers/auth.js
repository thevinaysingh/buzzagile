/* eslint no-underscore-dangle: 0 */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from 'actions/auth/types';

const initialState = {
  isLoading: false,
  loginResponse: {},
};

export const authReducer = (state = initialState, action) => {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        loginResponse: {},
      };

    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        loginResponse: action.data,
      };
    default:
      return state;
  }
}

export default login;
