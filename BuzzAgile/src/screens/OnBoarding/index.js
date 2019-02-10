import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { RootContainer } from 'components/AppStyledComponents';
import { screens } from 'navigator/screens-name';
import { images } from 'assets/images';
import { Colors } from 'theme';

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
  },
  text: {
    color: 'darkgrey',
    marginVertical: 40,
  },
});

const slides = [
  {
    key: 'screen-one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    textStyle: styles.text,
    image: images.logo_image,
    imageStyle: styles.image,
    backgroundColor: Colors.appWhiteColor,
  },
  {
    key: 'screen-two',
    title: 'Title 2',
    text: 'Other cool stuff',
    textStyle: styles.text,
    image: images.logo_image,
    imageStyle: styles.image,
    backgroundColor: Colors.appWhiteColor,
  },
  {
    key: 'screen-three',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    textStyle: styles.text,
    image: images.logo_image,
    imageStyle: styles.image,
    backgroundColor: Colors.appWhiteColor,
  },
];

class OnBoarding extends Component {
  constructor(props) {
    super(props);
  }

  onDone() {
    this.props.navigation.navigate(screens.SELECT_LANGUAGE);
  }

  render() {
    return (
      <RootContainer>
        <AppIntroSlider
          bottomButton
          showSkipButton
          activeDotStyle={{ backgroundColor: 'rgb(121, 104, 197)', width: 15, height: 7 }}
          dotStyle={{ backgroundColor: 'darkgray', width: 15, height: 7 }}
          nextLabel=""
          buttonStyle={{ backgroundColor: 'transparent' }}
          buttonTextStyle={{ color: Colors.appBlackColor }}
          slides={ slides }
          onDone={ () => this.onDone() }
          onSkip={ () => this.onDone() }
        />
      </RootContainer>
    );
  }
}

OnBoarding.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default OnBoarding;
