import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import { images } from 'assets/images';
// import { localizeStrings } from '../localisationStrings';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height * 0.20,
  },
  headerStyle: {
    width,
    // alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: height * 0.15,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
  },
  subHeaderStyle: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subTextStyle: {
    color: 'purple',
    fontSize: 18,
    fontWeight: '400',
  }
});

const HeaderView = props => (
  <View style={styles.container}>
    <ImageBackground
      resizeMode='stretch'
      source={images.headerBg}
      style={styles.headerStyle}
    >
      <Text style={styles.headerText}>
        Buzz Agile
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ marginRight: 20 }}
          onPress={() => props.onPressNotification()}
        >
          <Image
            style={{}}
            source={images.notificationBell}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{}}
          onPress={() => props.onPressMenu()}
        >
          <Image
            style={{}}
            source={images.menuImage}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
    <View style={styles.subHeaderStyle}>
      <Text style={styles.subTextStyle}>
        Notification
      </Text>
    </View>
  </View>
);

HeaderView.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onPressMenuItem: PropTypes.func,
  active: PropTypes.bool,
};

HeaderView.defaultProps = {
  label: 'Label missing',
  icon: '',
  onPressMenuItem: undefined,
  active: false,
};

export default HeaderView;
