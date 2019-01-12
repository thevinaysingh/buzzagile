/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Dimensions,
} from 'react-native';
import ContainerView from './components/ContainerView';

export let navigatorObject = null;

class Splash extends Component {
  constructor(props) {
    super(props);
    navigatorObject = props.navigation;
  }

  componentDidMount() {
    setTimeout( () => {
      this.sideMenuAction();
   },2000);
  }
  sideMenuAction() {
    this.props.navigation.navigate('SelectLanguage');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
         <ContainerView 
          sideMenuAction={() => this.sideMenuAction()}
         />
      </View>
    );
  }
}

Splash.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Splash.defaultProps = {
  navigation: {},
};

export default Splash;
