import React from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import { images } from '../../../assets/images';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashIconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashImg: {
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
const ContainerView = (props) => (
  <ImageBackground style={styles.backgroundImage} source={images.appBgImg} resizeMode="cover" >
    <View style={styles.splashIconView}>
      <Animated.View                 // Special animatable View
        style={{opacity: props.fadeAnim,}}
      >
        <Animated.Image style={[styles.splashImg, { opacity: props.fadeAnim, width:props.fadeWidth, height: props.fadeHeight }]} source={images.appLogo} />
      </Animated.View>
    </View>
  </ImageBackground>
);

ContainerView.propTypes = {
};

ContainerView.defaultProps = {
};

export default ContainerView;
