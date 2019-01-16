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
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import HeaderView from '../../components/HeaderView';
import NotificationCell from './components/NotificationCell';
import { images } from 'assets/images';

class Notification extends Component {
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
      <View style={{ flex: 1 }}>
        <HeaderView
          onPressNotification={() => null}
          onPressMenu={() => null}
        />
        <NotificationCell
          isOptional={Boolean(true)}
        />
      </View>
    );
  }
}

Notification.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Notification.defaultProps = {
  navigation: {},
};

export default Notification;
