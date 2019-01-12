/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from 'store';
import runRootSaga from 'sagas';
import Navigator from 'navigator';

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
      <Provider store={ store }>
        <Navigator />
      </Provider>
    );
  }
}
