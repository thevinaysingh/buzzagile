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
import CustomBackButton from '../../components/CustomBackButton';
import { images } from '../../assets/images';

// export let navigatorObject = null;

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
  backPress() {
  }
  getStartedPress() {
  }
  loginPress() {
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <View style={{ flex: 0.2, padding: 18 }}>
          <CustomBackButton
            imagebg={ images.tick }
            onPress={ this.backPress() }
          />
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Logo />
        </View>
        <View style={{ flex: 1.2, alignItems: 'center' }}>
          <CustomText title={'Don`t have any account'} />
          <RoundedButtonFilled
            imagebg={ images.getStart }
            onPress={ this.getStartedPress() }
          />
        </View>
        <View style={{ flex: 1.5, alignItems: 'center' }}>
          <CustomText title={'Already have any account'} />
          <RoundedButtonFilled
            imagebg={ images.login }
            onPress={ this.loginPress() }
          />
        </View>
        <View style={{ flex: 0.4, alignItems: 'center' }}>
          <CustomText title={'Terms & conditions'} />
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
