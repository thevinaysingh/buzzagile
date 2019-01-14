import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import { images } from '../assets/images';

const styles = StyleSheet.create({
  buttonStyle: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 0,
    height: 40,
    color: '#0000ff',
  },
  roundedbuttonStyle: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CustomBackButton = props => (
  <ImageBackground
    source={ props.imagebg }
    style={ styles.roundedbuttonStyle }
  >
    <TouchableOpacity
      style={ styles.roundedbuttonStyle }
      onPress={ () => props.onPress() }
    />
  </ImageBackground>
);

CustomBackButton.propTypes = {
  // imagebg: PropTypes.string,
  onPress: PropTypes.func,
};

CustomBackButton.defaultProps = {
  // imagebg: {},
  onPress: () => {},
};

export default CustomBackButton;
