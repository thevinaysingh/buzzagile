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
import RoundedButtonFilled from '../../components/RoundedButtonFilled';
import Logo from '../../components/Logo';
import CustomText from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import { images } from '../../assets/images';
import ImageView from './ImageView';

// export let navigatorObject = null;

class SelectLanguage extends Component {
  constructor(props) {
    super(props);
    navigatorObject = props.navigation;
    this.state = {
      phoneNumber: '',
      password: '',
    };
  }

  componentDidMount() {
  }

  sideMenuAction() {
    // this.props.navigation.navigate('Home');
  }
  backPress() {
  }
  getStartedPress() {
  }
  loginPress() {
  }

  onChangePhoneNumber(phoneNumber) {
    this.setState({
      phoneNumber,
    });
  }

  onChangePassword(password) {
    this.setState({
      password,
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 1.5, alignItems: 'center' }}>
          <ImageView profileImage={ images.profileImage } />
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <CustomInput
            placeholder="Phone Number"
            // text={ this.state.phoneNumber }
            // onChange={ this.onChangePhoneNumber() }
          />
          <CustomInput
            placeholder="Password"
            // text={ this.state.password }
            // onChange={ this.onChangePassword() }
          />
          <CustomInput
            placeholder="Password"
            // text={ this.state.password }
            // onChange={ this.onChangePassword() }
          />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <RoundedButtonFilled
            imagebg={ images.facebook }
            onPress={ this.loginPress() }
          />
          <RoundedButtonFilled
            imagebg={ images.submit }
            onPress={ this.loginPress() }
          />
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
