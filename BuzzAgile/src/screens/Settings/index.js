import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { RootContainer } from 'components/AppStyledComponents';
import { screens } from 'navigator/screens-name';
import RoundedButtonFilled from 'components/RoundedButtonFilled';
import Logo from 'components/Logo';
import CustomText from 'components/CustomText';
import { images } from 'assets/images';
import Navigation from 'components/NavigationBar';
import Notification from './Components/Notification';
import Interest from './Components/Interest';
import Languages from './Components/Languages';
/**
  * @desc this class will display the options to redirect to login or signup
  * @author Pushpendra mishra pushpendra.mishra660@gmail.com
  * @required null
*/

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchOn: true,
    };
  }

  onPressGetStarted() {
    this.props.navigation.navigate(screens.ENTER_PHONE);
  }

  onPressLogin() {
    this.props.navigation.navigate(screens.LOGIN);
  }

  toggleButton(a) {
    this.setState({ switchOn: a });
  }

  render() {
    return (
      <RootContainer>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Navigation />
          <Notification switchOn={this.state.switchOn} toggleButton={ a => this.toggleButton(a) } />
          <Interest />
          <Languages />
        </View>
        
      </RootContainer>
    );
  }
}

Welcome.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Welcome;
