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
  RoundedbuttonStyle: {
    width: '80%',
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const RoundedButtonFilled = props => (
  <ImageBackground
    source={ props.imagebg }
    style={ styles.RoundedbuttonStyle }
  >
    <TouchableOpacity
      style={ styles.RoundedbuttonStyle }
      onPress={ () => props.onPress() }
    />
  </ImageBackground>
);

RoundedButtonFilled.propTypes = {
  // imagebg: PropTypes.string,
  onPress: PropTypes.func,
};

RoundedButtonFilled.defaultProps = {
  // imagebg: {},
  onPress: () => {},
};

export default RoundedButtonFilled;
