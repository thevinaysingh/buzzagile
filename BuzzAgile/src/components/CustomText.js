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
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 18,
    marginTop: 0,
    height: 40,
    color: '#0000ff',
  },
  text: {
    color: 'gray',
    fontSize: 18,
  }
});

const CustomButton = props => (
  <View style={styles.container}>
    <Text style={styles.text}>{props.title}</Text>
  </View>
);

CustomButton.propTypes = {
  title: PropTypes.string,
};

CustomButton.defaultProps = {
  title: 'hello world',
};

export default CustomButton;
