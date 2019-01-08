import { authTypes } from 'actions/auth/types';
import { postApiAction } from 'api/actions/apiActions';
import { loginURL } from 'api/urls';

const login = (email, password) => {
  const body = {
    email,
    password,
  };
  return postApiAction({
    types: [authTypes.LOGIN_REQUEST, authTypes.LOGIN_SUCCESS, authTypes.LOGIN_FAILURE],
    url: loginURL,
    body,
  });
};

/* Auth action creators */
export const AuthActionCreators = {
  /* Auth action creators */
  login,
};