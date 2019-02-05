import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { RootContainer } from 'components/AppStyledComponents';
import RoundedButtonFilled from 'components/RoundedButtonFilled';
import Logo from 'components/Logo';
import CustomText from 'components/CustomText';
import { images } from 'assets/images';
import CustomInput from 'components/CustomInput';

/**
  * @desc this class will handle login functionality
  * @author Pushpendra mishra pushpendra.mishra660@gmail.com
  * @required null
*/

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: '',
      password: '',
    };
  }

  onChangeState = (key, value) => {
    this.setState({
      [key]: value,
    });
  }

  onPressLogin = () => {
    alert('Login clicked');
  }

  render() {
    return (
      <RootContainer>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Logo />
        </View>
        <View style={{ flex: 0.4, alignItems: 'center' }}>
          <CustomText title="Don't have any account" />
        </View>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <CustomInput
            placeholder="Phone Number"
            text={ this.state.phoneNumber }
            onChange={ txt => this.onChangeState('phoneNumber', txt) }
          />
          <CustomInput
            placeholder="Password"
            text={ this.state.password }
            onChange={ txt => this.onChangeState('password', txt) }
          />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <RoundedButtonFilled
            imagebg={ images.signin_btn }
            onPress={ this.onPressLogin }
          />
          <CustomText title="Terms & conditions" />
        </View>
      </RootContainer>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Login;
