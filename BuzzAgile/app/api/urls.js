import { getBaseUrl } from '../config/appConfig';

export const loginUserUrl = `${getBaseUrl()}/api/v1/users/sign_in`;
export const registerUserUrl = `${getBaseUrl()}/api/v1/users/sign_up`;
export const forgotPasswordUrl = `${getBaseUrl()}/api/v1/users/forgot_password`;
export const socialLoginUrl = `${getBaseUrl()}/api/v1/users/authenticate`;
export const inviteCodeUrl = `${getBaseUrl()}/api/v1/users/validate_invite`;
export const updatePasswordUrl = `${getBaseUrl()}/api/v1/users/reset_password`;
export const deleteUserUrl = `${getBaseUrl()}/api/v1/users/sign_out`;
