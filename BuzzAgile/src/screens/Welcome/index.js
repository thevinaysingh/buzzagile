import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { RootContainer } from 'components/AppStyledComponents';
import { screens } from 'navigator/screens-name';
import RoundedButtonFilled from 'components/RoundedButtonFilled';
import Logo from 'components/Logo';
import CustomText from 'components/CustomText';
import { images } from 'assets/images';

/**
  * @desc this class will display the options to redirect to login or signup
  * @author Pushpendra mishra pushpendra.mishra660@gmail.com
  * @required null
*/

class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  onPressGetStarted() {
    this.props.navigation.navigate(screens.ENTER_PHONE);
  }

  onPressLogin() {
    this.props.navigation.navigate(screens.LOGIN);
  }

  render() {
    return (
      <RootContainer>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Logo />
        </View>
        <View style={{ flex: 1.2, alignItems: 'center' }}>
          <CustomText title={'Don`t have any account'} />
          <RoundedButtonFilled
            imagebg={ images.get_started_btn }
            onPress={ () => this.onPressGetStarted() }
          />
        </View>
        <View style={{ flex: 1.5, alignItems: 'center' }}>
          <CustomText title={'Already have any account'} />
          <RoundedButtonFilled
            imagebg={ images.signin_btn }
            onPress={ () => this.onPressLogin() }
          />
        </View>
        <View style={{ flex: 0.4, alignItems: 'center' }}>
          <CustomText title={'Terms & conditions'} />
        </View>
      </RootContainer>
    );
  }
}

Welcome.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Welcome;
