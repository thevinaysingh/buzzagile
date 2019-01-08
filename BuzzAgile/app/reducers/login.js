/* eslint no-underscore-dangle: 0 */

import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RESET_USER_LOGIN,
  RESET_LOGOUT,
} from '../actions/authentication';

const initialState = {
  isLoading: false,
  loginUserResponse: {},
};

function login(state = initialState, action) {
  if (action.type === 'undefined') {
    return state;
  }

  switch (action.type) {
    case RESET_USER_LOGIN:
      return {
        ...state,
        isLoading: false,
        loginUserResponse: {},
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        loginUserResponse: {},
      };

    case LOGIN_SUCCESS:
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        loginUserResponse: action.data,
      };

    case RESET_LOGOUT:
      return {
        isLoading: false,
        loginUserResponse: {},
      };

    default:
      return state;
  }
}

export default login;
