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
import RoundedButton from '../../components/RoundedButton';
import Logo from '../../components/Logo';

export let navigatorObject = null;

class SelectLanguage extends Component {
  constructor(props) {
    super(props);
    navigatorObject = props.navigation;
  }

  componentDidMount() {
  }
  sideMenuAction() {
    // this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Logo />
         </View>
         <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
          <RoundedButton title={'Select Language'}/>
         </View>
      </View>
    );
  }
}

SelectLanguage.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

SelectLanguage.defaultProps = {
  navigation: {},
};

export default SelectLanguage;
