import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StackActions, NavigationActions } from 'react-navigation';
import styled from 'styled-components';
import { images } from 'assets/images';
import { RootContainer } from 'components/AppStyledComponents';
import { screens } from 'navigator/screens-name';
import * as Storage from 'utils/storage';
import { CONSTANTS } from 'utils/constants';

/**
  * @desc this class will display the splash image only
  * @author Pushpendra mishra pushpendra.mishra660@gmail.com
  * @required null
*/

const SPLASH_TIME_OUT = 2000;

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    Storage.getItemWithKey(CONSTANTS.KEYS.ACCESS_TOKEN, (response) => {
      if (response) {
        this.goToScreen(screens.DASHBOARD);
      } else {
        this.checkAppOpenedFirstTime();
      }
    });
  }

  checkAppOpenedFirstTime() {
    Storage.getItemWithKey(CONSTANTS.KEYS.APP_NOT_OPEN_FIRST_TIME, (response) => {
      if (response) {
        this.goToScreen(screens.WELCOME);
      } else {
        this.goToScreen(screens.ON_BOARDING);
      }
    });
  }

  goToScreen(screenToRedirect) {
    setTimeout(() => {
      const resetAction = StackActions.reset({
        index: 0,
        key: null,
        actions: [
          NavigationActions.navigate({ routeName: screenToRedirect }),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    }, SPLASH_TIME_OUT);
  }

  render() {
    return (
      <RootContainer>
        <SplashImageView source={ images.splash } resizeMode="cover" />
      </RootContainer>
    );
  }
}

const SplashImageView = styled.ImageBackground`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
`;

Splash.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Splash;
