import {
  loginUserUrl,
} from '../api/urls';

import { postApiAction, getApiAction } from '../api/actions/apiActions';

export const RESET_USER_LOGIN = 'RESET_USER_LOGIN';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const RESET_LOGOUT = 'RESET_LOGOUT';


export const userLoginRequest = (email, password) => {
  const body = {
    email,
    password,
  };
  return postApiAction({
    types: [LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE],
    url: loginUserUrl,
    body: JSON.stringify(body),
  });
};

export const resetlogout = () => ({
  type: RESET_LOGOUT,
});
