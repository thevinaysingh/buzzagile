import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RoundedButton from 'components/RoundedButton';
import Logo from 'components/Logo';
import { RootContainer, FlexContainerCenteredChild } from 'components/AppStyledComponents';
import { screens } from 'navigator/screens-name';

class SelectLanguage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLaguage: 'English',
    };
  }

  onSelectLanguage() {
    // TODO: Implement select language functionality.
    console.log('selectedLaguage', this.state.selectedLaguage);
    this.props.navigation.navigate(screens.WELCOME);
  }

  render() {
    return (
      <RootContainer>
        <FlexContainerCenteredChild>
          <Logo />
        </FlexContainerCenteredChild>
        <FlexContainerCenteredChild
          style={{ justifyContent: 'flex-start' }}
        >
          <RoundedButton
            title="Select Language"
            onPress={ () => this.onSelectLanguage() }
          />
        </FlexContainerCenteredChild>
      </RootContainer>
    );
  }
}

SelectLanguage.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SelectLanguage;
