import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { RootContainer } from 'components/AppStyledComponents';
import { screens } from 'navigator/screens-name';
import { images } from 'assets/images';
import RoundedButtonFilled from 'components/RoundedButtonFilled';
import Logo from 'components/Logo';
import CustomText from 'components/CustomText';
import CustomInput from 'components/CustomInput';
import CustomBackButton from 'components/CustomBackButton';

class EnterPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
    };
  }

  onPressNext = () => {
    this.props.navigation.navigate(screens.PHONE_VERIFICATION);
  }

  onChangePhoneNumber = (phoneNumber) => {
    this.setState({
      phoneNumber,
    });
  }

  render() {
    return (
      <RootContainer style={{ padding: 10 }}>
        <CustomBackButton
          imagebg={ images.tick }
          onPress={ () => this.props.navigation.goBack() }
        />
        <View style={{ flex: 1.5, alignItems: 'center' }}>
          <Logo />
        </View>
        <View style={{ flex: 0.4, alignItems: 'center' }}>
          <CustomText title="We transfer your prize money via paytm" />
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <CustomInput
            placeholder="Phone Number"
            text={ this.state.phoneNumber }
            onChange={ this.onChangePhoneNumber }
          />
          <RoundedButtonFilled
            imagebg={ images.next_btn }
            onPress={ this.onPressNext }
          />
        </View>

      </RootContainer>
    );
  }
}

EnterPhone.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default EnterPhone;
