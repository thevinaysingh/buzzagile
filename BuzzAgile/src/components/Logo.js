import React from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';
import { images } from '../assets/images';

const styles = StyleSheet.create({
  RoundedbuttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '60%',
    height: '60%',
  },
});

const Logo = () => (
  <Image
    source={ images.logo_image }
    style={ styles.RoundedbuttonStyle }
    resizeMode='contain'
  />
);

export default Logo;
