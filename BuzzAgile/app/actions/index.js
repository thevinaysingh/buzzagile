import { bindActionCreators } from 'redux';
import {
  userLoginRequest,
   resetlogout,
} from './authentication';

import { store } from '../store';

const actions = {
  userLoginRequest,
  resetlogout,
};

export default bindActionCreators(actions, store.dispatch);
