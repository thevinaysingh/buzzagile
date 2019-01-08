import Environments from './environments.json';

const defaultEnvironment = 'staging';

export const getBaseUrl = function getBaseUrl() {
  return defaultEnvironment === 'production' ? Environments.production.BASE_URL : Environments.staging.BASE_URL;
};

const DarkGray = 'rgb(31, 35, 41)';

export const color = {
  DarkGray,
};

export const constant = {
  ABLY_API_KEY: 'SqQh8Q.q8MiAg:krRZIYSetkF4Mp-v',
  OPEN_APP_FIRST_TIME: 'OPEN_APP_FIRST_TIME',
  SERVER_ERROR_MESSAGE: 'The request failed due to an internal error.',
  noInternetConnection: {
    header: 'No Internet Connection Available',
    message: 'Please check your internet connection.',
  },
  USER_DETAILS: 'USER_DETAILS',
};


