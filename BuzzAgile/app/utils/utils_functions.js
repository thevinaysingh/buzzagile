import { NavigationActions } from 'react-navigation';

/**
* @param {any} navigation
* @param {string} screenName
*/
export const resetRoute = (navigation, screenName) => {
  const resetAction = NavigationActions.reset({
    index: 0,
    actions: [
      NavigationActions.navigate({ routeName: screenName }),
    ],
    key: null,
  });
  navigation.dispatch(resetAction);
};

/**
* @param {object} apiResponse
* @returns {boolean}
*/
export const isResponseValid = (apiResponse) => {
  if (apiResponse.status && apiResponse.status >= 200 && apiResponse.status <= 300) {
    return true;
  }
  return false;
};

/**
* @param {object} apiResponse
* @returns {boolean}
*/
export const isResponseValidated = (apiResponse) => {
  if (apiResponse.status !== undefined && apiResponse.response !== undefined) {
    return true;
  }
  return false;
};

/**
* @param {object} apiResponse
* @returns {boolean}
*/
export const isResponseSuccess = (apiResponse) => {
  if (apiResponse.status &&
    apiResponse.status >= 200 &&
    apiResponse.status <= 300 &&
    apiResponse.response !== undefined) {
    return true;
  }
  return false;
};
