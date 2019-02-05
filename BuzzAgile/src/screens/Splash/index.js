import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { images } from 'assets/images';
import { RootContainer } from 'components/AppStyledComponents';
import { screens } from 'navigator/screens-name';

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
    setTimeout(() => { this.pushNextScreen(); }, SPLASH_TIME_OUT);
  }

  pushNextScreen() {
    this.props.navigation.navigate(screens.ON_BOARDING);
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
