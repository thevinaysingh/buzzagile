import React from 'react';
import {
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { images } from 'assets/images';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const ContainerView = (props) => (
  <ImageBackground
    style={styles.backgroundImage}
    source={images.splash}
    resizeMode="cover"
  />
);

export default ContainerView;
