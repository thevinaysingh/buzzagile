import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
} from 'react-native';
import { images } from '../../../assets/images';
import { color, width } from '../../../config/appConfig';

const leftPadding = (Platform.OS === 'android') ? 56 : 64;

const styles = StyleSheet.create({
  viewProfileContainer: {
    height: 160,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderBottomColor: 'red',
    paddingTop: 15,
  },
  viewProfile: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'white',
    borderWidth: 2,
  },
  avatarStyle: {
    width: 66,
    height: 66,
    borderRadius: 33,
  },
  largeWhiteLabel: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'RobotoCondensed-Regular',
    marginTop: 5,
  },
  defaultWhiteLabel: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
  lineView: {
    position: 'absolute',
    height: 1,
    width: width - leftPadding,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: color.Orange,
  },
  backgroundImage: {
    height: 160,
    width: width - leftPadding,
    resizeMode: 'cover',
  },
});

const SideMenuHeader = props => (
    <View style={styles.viewProfileContainer}>
      <View style={styles.viewProfile}>
        <Image
          style={styles.avatarStyle}
          source={images.profilePic}
        />
      </View>
      <Text style={styles.largeWhiteLabel}>Jhon Smith</Text>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{ height: 40}} >
        <Text
            style={[styles.defaultWhiteLabel, { padding: 0 }]}
          >{'Account Balance:'}
          </Text>
        </View>
        <View style={{ height: 40 }} >
        <Text
            style={[styles.defaultWhiteLabel, { padding: 0, fontWeight: 'bold' }]}
          >{'$ 145.00'}
          </Text>
        </View>
      </View>

      <View style={styles.lineView} />
    </View>
);

SideMenuHeader.propTypes = {
  // label: PropTypes.string,
  // icon: PropTypes.string,
  // onPressMenuItem: PropTypes.func,
  // active: PropTypes.bool,
};

SideMenuHeader.defaultProps = {
  // label: 'Label missing',
  // icon: '',
  // onPressMenuItem: undefined,
  // active: false,
};

export default SideMenuHeader;
