import Environments from './environments.json';

const defaultEnvironment = 'staging';

export const getBaseUrl = function getBaseUrl() {
  return defaultEnvironment === 'production' ? Environments.production.BASE_URL : Environments.staging.BASE_URL;
};


