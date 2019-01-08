/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import runRootSaga from './app/sagas';
import Navigator from './app/navigator';

export default class App extends Component {
  constructor() {
    super();
    this.state = {};
    runRootSaga();
    // for hide warning messages
    console.disableYellowBox = true;
  }

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
