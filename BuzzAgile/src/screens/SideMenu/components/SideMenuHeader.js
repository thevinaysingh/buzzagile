import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { images } from 'assets/images';
import { width } from 'config/appConfig';

const styles = StyleSheet.create({
  viewProfileContainer: {
    height: 240,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderBottomColor: 'red',
    // paddingTop: 15,
  },
  viewProfile: {
    width: 120,
    height: 120,
    borderRadius: 60,
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
    // fontFamily: 'RobotoCondensed-Regular',
    marginTop: 5,
  },
  defaultWhiteLabel: {
    fontSize: 22,
    color: 'white',
    marginTop: 5,
    padding: 0,
    fontWeight: 'bold',
  },
  crossButtonView: {
    justifyContent: 'flex-end',
    flex: 1,
    alignItems: 'flex-end',
  },
  crossButton: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
  },
});

const SideMenuHeader = props => (
  <View style={{ flex: 1, backgroundColor: 'orange' }}>
    <View style={ styles.crossButtonView }>
      <TouchableOpacity
        style={ styles.crossButton }
        onPress={ () => props.sideMenuClose() }
      />
    </View>
    <View style={ styles.viewProfileContainer }>
      <View style={ styles.viewProfile }>
        <Image
          style={ styles.avatarStyle }
          source={ images.profilePic }
        />
      </View>
      <Text style={ styles.largeWhiteLabel }>Jhon Smith</Text>
      <View style={{ height: 40, marginTop: 40 }}>
        <Text
          style={ styles.defaultWhiteLabel }
        >{ '145.00' }
        </Text>
      </View>
    </View>
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
