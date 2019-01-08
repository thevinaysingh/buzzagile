/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Animated,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import ContainerView from './components/ContainerView';
import Utils from '../../utils/utils';
import StatusBar from '../../components/StatusBar';
const { width, height } = Dimensions.get('window');
import NavigationBar from '../../components/NavigationBar';

import images from '../../assets/images';
export let navigatorObject = null;

class Splash extends Component {
  constructor(props) {
    super(props);
    navigatorObject = props.navigation;
  }

  componentDidMount() {

  }
  sideMenuAction() {
    this.props.navigation.navigate('Home');
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
      <NavigationBar
        title='testing world'
        showBackButton={Boolean(true)}
        // backButtonImage={images.backbutton}
        // backButtonAction={() => this.popBack()}
        // backButtonAction={() => this.sideMenuAction()}
        hideRightView={true}
      />
        <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.sideMenuAction()}
              style={{ color: 'black', height: 50, width: 60 , backgroundColor: 'red'}}
            >
         <Text>Click Me</Text>
         </TouchableOpacity>
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
