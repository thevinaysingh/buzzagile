import { combineReducers } from 'redux';
import { authReducer as auth } from 'reducers/auth';

export const rootReducer = combineReducers({
  auth,
});
