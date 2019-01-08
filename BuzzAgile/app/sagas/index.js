import { fork } from 'redux-saga/effects';
import { sagaMiddleware } from '../store';
import StartupSaga from './startupSaga';
import watchApi from '../api/saga';

function* root() {
  yield fork(StartupSaga);
  yield fork(watchApi);
}

const run = () => sagaMiddleware.run(root);

export default run;