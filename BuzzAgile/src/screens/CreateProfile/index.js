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
import { screens } from 'navigator/screens-name';
import { NavigationActions, StackActions } from 'react-navigation';

import RoundedButtonFilled from '../../components/RoundedButtonFilled';
// import Logo from '../../components/Logo';
// import CustomText from '../../components/CustomText';
import CustomInput from '../../components/CustomInput';
import { images } from '../../assets/images';
import ImageView from './ImageView';

// export let navigatorObject = null;

class CreateProfile extends Component {
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
    // this.props.navigation.openDrawer();
    const resetAction = StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'DrawerStack' }),
      ],
    });

    this.props.navigation.dispatch(resetAction);
  }

  backPress() {
  }

  getStartedPress() {
  }
  
  loginPress() {
    this.props.navigation.navigate(screens.HOME);
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
          <ImageView profileImage={ images.profile } />
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
            imagebg={ images.facebook_btn }
            onPress={ () => this.loginPress() }
          />
          <RoundedButtonFilled
            imagebg={ images.submit_btn }
            onPress={ () => this.loginPress() }
          />
        </View>
      </View>
    );
  }
}

CreateProfile.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

CreateProfile.defaultProps = {
  navigation: {},
};

export default CreateProfile;
