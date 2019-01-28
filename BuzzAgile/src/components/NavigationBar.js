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
  ImageBackground,
  SafeAreaView,
} from 'react-native';
import { images } from 'assets/images';
import { NavBarHeight, isIOS, isIphoneX } from 'utils/helpers';
import colors from 'theme/colors';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    height: 120,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  titleText: {
    color: colors.appRedColor,
    fontSize: 20,
    textAlign: 'center',
  },
  leftView: {
    flex: 0.18,
    width: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
  },
  navImage: {
    width: 25,
    height: 30,
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
  showRightButton,
  rightButtonImage,
  rightButtonAction,
  hideRightView,
}) => (
  <View style={ styles.container }>
    <ImageBackground
      style={{ height: '100%', width: '100%', flexDirection: 'row' }}
      source={ images.headerBg }
      // resizeMode="cover"
    >
      <View style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}>
        { showBackButton
          ? (
            <TouchableOpacity
              onPress={ () => backButtonAction() }
            >
              <Text>Back</Text>
            </TouchableOpacity>
          )
          : null }
      </View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={ styles.titleText }>{ title }</Text>
      </View>
      <View style={{ width: 60, justifyContent: 'center', alignItems: 'center' }}>
        { showRightButton
          ? (
            <TouchableOpacity
              onPress={ () => rightButtonAction() }
            >
              <Text>Menu</Text>
            </TouchableOpacity>
          )
          : null }
      </View>
    </ImageBackground>
  </View>
);

NavBar.propTypes = {
  backButtonAction: PropTypes.func,
  backButtonImage: PropTypes.any,
  hideRightView: PropTypes.bool,
  leftView: PropTypes.element,
  rightButtonAction: PropTypes.func,
  rightButtonImage: PropTypes.any,
  rightView: PropTypes.element,
  showBackButton: PropTypes.bool,
  showRightButton: PropTypes.bool,
  title: PropTypes.string,
};

NavBar.defaultProps = {
  title: '',
  leftView: null,
  rightView: null,
  showBackButton: false,
  showRightButton: false,
  backButtonImage: null,
  backButtonAction: () => {},
  rightButtonImage: null,
  rightButtonAction: () => {},
  hideRightView: false,
};
export default NavBar;
