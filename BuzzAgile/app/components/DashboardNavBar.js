/* eslint react/forbid-prop-types: 0 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import colors from '../theme/colors';
import { NavBarHeight, isIOS, isIphoneX } from '../utils/platformSpecific';
import { images } from '../assets/images';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    height: isIOS ? (isIphoneX ? 84 : 64) : 54,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingTop: isIOS ? 24 : 8,
  },
  headerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    color: 'red',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Arial',
    fontWeight: '500',
  },
  leftView: {
    flex: 0.18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  navImage: {
    width: 25,
    height: 30,
  },
  leftTouchableStyle: {
    alignSelf: 'stretch',
    paddingVertical: 5,
  },
  headerContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  gestureViewStyle: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  sportContainer: {
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
  sportText: {
    color: colors.appRedColor,
    fontSize: 20,
    textAlign: 'center',
    // fontFamily: 'RobotoCondensed-Bold',
    marginRight: 12,
  },
  sportDownIcon: {
    width: 15,
    height: 15,
    marginLeft: 15,
  },
  swipeIcon: {
    width: 20,
    height: 20,
    marginLeft: 15,
  },
  rightView: {
    flex: 0.25,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingRight: 10,
  },
  rightInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginVertical: 2,
  },
  walletAmountText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    // fontFamily: 'RobotoCondensed-Regular',
  },
  rightInfoIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
});

const NavBar = ({
  title,
  showBackButton,
  backButtonImage,
  backButtonAction,
  selectedSport,
  handleSwipeGesture,
  showRightButton,
  rightButtonImage,
  rightButtonAction,
  openSportsDropDown,
}) => (
  <View style={styles.container}>
    <View style={styles.leftView}>
      {showBackButton ?
        <TouchableOpacity
          onPress={() => backButtonAction()}
          style={styles.leftTouchableStyle}
        >
          <Image style={styles.navImage} source={backButtonImage} />
        </TouchableOpacity>
        : null }
    </View>
    {/* <View style={styles.headerView}>
      <Text style={styles.titleText}>{title}</Text>
    </View> */}
    <View style={styles.headerContainer}>
      <View>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => openSportsDropDown()}
        >
          <View style={styles.sportContainer}>
            <Text style={styles.sportText}>{selectedSport.name && selectedSport.name !== null && selectedSport.name.toUpperCase()}</Text>
            {/* <Image source={images.downGreyIcon} style={styles.sportDownIcon} resizeMode="contain" /> */}
          </View>
        </TouchableOpacity>
        <Image source={images.swipeIcon} style={styles.swipeIcon} resizeMode="contain" />
      </View>
    </View>
  </View>
);

NavBar.propTypes = {
  title: PropTypes.string,
  leftView: PropTypes.element,
  rightView: PropTypes.element,
  showBackButton: PropTypes.bool,
  showRightButton: PropTypes.bool,
  backButtonImage: PropTypes.any,
  backButtonAction: PropTypes.func,
  selectedSport: PropTypes.objectOf(PropTypes.any),
  handleSwipeGesture: PropTypes.func,
  openSportsDropDown: PropTypes.func,

  rightButtonImage: PropTypes.any,
  rightButtonAction: PropTypes.func,
};

NavBar.defaultProps = {
  title: '',
  leftView: null,
  rightView: null,
  showBackButton: false,
  showRightButton: false,
  backButtonImage: null,
  backButtonAction: () => {},
  selectedSport: {},
  handleSwipeGesture: () => {},
  openSportsDropDown: () => {},

  rightButtonImage: null,
  rightButtonAction: () => {},
};
export default NavBar;
