import React from 'react';
import PropTypes from 'prop-types';
import {
  TextInput,
  StyleSheet,
  Text,
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
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CustomInput = props => (
  <ImageBackground
    source={ images.inputField }
    style={ styles.RoundedbuttonStyle }
  >
    <TextInput
      style={{ height: 50, fontSize: 18, bottom: 5, alignSelf: 'stretch', marginHorizontal: 15 }}
      underlineColorAndroid="transparent"
      placeholder={ props.placeholder }
      value={props.text}
      onChangeText={(text) => props.onChange(text)}
    />
  </ImageBackground>
);

CustomInput.propTypes = {
  title: PropTypes.string,
  placeholder: PropTypes.string,
};

CustomInput.defaultProps = {
  title: 'hello world',
  placeholder: 'Placeholder text',
};

export default CustomInput;
