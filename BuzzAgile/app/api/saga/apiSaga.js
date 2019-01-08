import { AsyncStorage, Alert } from 'react-native';
import { call, put, takeEvery } from 'redux-saga/effects';
import { apiCall } from '../apiInterface';
import { navigatorObject } from '../../screens/Splash';
import { API_ACTION } from '../actions/apiActions';
// import { RESET_LOGOUT } from '../../actions/authentication';
import constant from '../../config/appConfig';
import { resetRoute } from '../../utils/utils_functions';

function* manageResponseData(action, response) {
  try {
    if (response.status === 401) {
      AsyncStorage.removeItem(constant.USER_DETAILS);
      // Api called successfully and return token invalidate error msg with code <= 400.
      resetRoute(navigatorObject, 'Login');
      // yield put({ type: RESET_LOGOUT });
      // Alert.alert('Message', 'Your session is expired.\nPlease login again.');
      return;
    }
    const parsedResponse = JSON.parse(response._bodyInit);
    if (response.error || (response.status && (response.status >= 500))) {
      // Api called and got internal server error with code <= 500.
      const serverErrorResponse = {
        response: {
          message: parsedResponse.message ?
            parsedResponse.message : `${constant.SERVER_ERROR_MESSAGE}`,
        },
        status: response.status,
      };
      yield put({ type: action.types[2], data: serverErrorResponse });
    } else if (response.error || (response.status &&
      (response.status < 200 || response.status >= 300))) {
      // Api call failed due to unknown error.
      const errorResponse = {
        response: {
          message: parsedResponse.message ?
            parsedResponse.message : `${constant.SERVER_ERROR_MESSAGE}`,
        },
        status: response.status,
      };
      yield put({ type: action.types[2], data: errorResponse });
    } else {
      const successResponse = {
        response: parsedResponse,
        status: response.status,
      };
      yield put({ type: action.types[1], data: successResponse, filters: action.filters });
    }
  } catch (error) {
    const unParsedResponse = {
      response: { message: `${constant.SERVER_ERROR_MESSAGE}` },
      status: response.status,
    };
    yield put({ type: action.types[2], data: unParsedResponse });
  }
}

function* apiInterface(action) {
  try {
    yield put({ type: action.types[0] });
    const response = yield call(
      apiCall, action.url, action.method,
      action.body, action.header, action.headers,
    );
    yield call(manageResponseData, action, response);
  } catch (e) {
    const exceptionObject = {
      response: { message: `${constant.SERVER_ERROR_MESSAGE}` },
      error: e,
      status: 500,
    };
    yield put({ type: action.types[2], data: exceptionObject });
  }
}

export default function* watchApi() {
  yield takeEvery(API_ACTION, apiInterface);
}
