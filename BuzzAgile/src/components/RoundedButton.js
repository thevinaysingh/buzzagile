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
    width: '70%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const RoundedButton = props => (
  <ImageBackground
    source={ images.roundedborder }
    style={ styles.RoundedbuttonStyle }
  >
    <TouchableOpacity
      style={ styles.RoundedbuttonStyle }
      onPress={ () => props.onPress() }
    >
      <Text style={ styles.buttonStyle }>{ props.title }</Text>
    </TouchableOpacity>
  </ImageBackground>
);

RoundedButton.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
};

RoundedButton.defaultProps = {
  title: 'hello world',
  onPress: () => {},
};

export default RoundedButton;
