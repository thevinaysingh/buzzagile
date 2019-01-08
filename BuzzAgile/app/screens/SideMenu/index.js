/* eslint react/sort-comp: 0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  Alert,
  AsyncStorage,
} from 'react-native';
import { images } from '../../assets/images';
import { showPopupAlert } from '../../utils/showAlert';
import SideMenuCell from './components/SideMenuCell';
import SideMenuHeader from './components/SideMenuHeader';
import { resetRoute } from '../../utils/utils_functions';
import constant, { color, width } from '../../config/appConfig';
import { localizeStrings } from './localizeStrings';

const leftPadding = (Platform.OS === 'android') ? 56 : 64;

const menuData = [
  {
    // name: localizeStrings.lobby,
    icon: images.lobby,
  },
  {
  //   name: localizeStrings.matchDetail,
    icon: images.lock,
  },
  {
    // name: localizeStrings.mybets,
    icon: images.mybets,
  },
  {
    // name: localizeStrings.myProfile,
    icon: images.profile,
  },
  {
    // name: localizeStrings.myWallet,
    icon: images.wallet,
  },
  // {
  //   // name: localizeStrings.notifications,
  //   icon: images.notification,
  // },
  // {
  //   name: localizeStrings.myStats,
  //   icon: images.mystats,
  // },
  // {
  //   name: localizeStrings.leaderboard,
  //   icon: images.leaderboard,
  // },
  // {
  //   name: localizeStrings.help,
  //   icon: images.help,
  // },
  // {
  //   name: localizeStrings.myFinance,
  //   icon: images.lock,
  // },
  // {
  //   name: localizeStrings.invitations,
  //   icon: images.lock,
  // },
  // {
  //   name: localizeStrings.notifications,
  //   icon: images.lock,
  // },
  // {
  //   name: localizeStrings.help,
  //   icon: images.lock,
  // },
  {
    name: localizeStrings.logout,
    icon: images.logout,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.DarkGray,
    // paddingTop: 20,
  },

  bodyView: {
    flex: 1,
    backgroundColor: 'white',
    width: width - leftPadding,
    marginTop: 20,
  },
  flatListStyle: {
    flex: 1,
    backgroundColor: color.DarkGray,
  },
});

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItems: menuData,
    };
  }

  onPressMenuItem(selectedItem) {
    console.log('********** menu', selectedItem);
    switch (selectedItem) {
      case localizeStrings.lobby:
        this.props.navigation.navigate('DrawerClose');
        break;
        case localizeStrings.mybets:
        this.props.navigation.navigate('DrawerClose');
        this.props.navigation.navigate('MyBets');
        break;
      case localizeStrings.matchDetail:
        this.navigateToScreen('MatchDetail');
        break;
      case localizeStrings.myProfile:
        this.navigateToScreen('Profile');
        break;
      case localizeStrings.createLeague:
        showPopupAlert('This will be covered in next milestone');
        break;
      case localizeStrings.myFinance:
        showPopupAlert('This will be covered in next milestone');
        break;
      case localizeStrings.invitations:
        showPopupAlert('This will be covered in next milestone');
        break;
      case localizeStrings.leaderboard:
        showPopupAlert('This will be covered in next milestone');
        break;
      case localizeStrings.notifications:
        showPopupAlert('This will be covered in next milestone');
        break;
      case localizeStrings.help:
        showPopupAlert('This will be covered in next milestone');
        break;
      case localizeStrings.logout:
        this.props.navigation.navigate('DrawerClose');
        this.logoutUser();
        // showPopupAlert('This will be covered in next milestone');
        break;
      default:
        break;
        // Do nothing
    }
  }

  navigateToScreen(screenName) {
    this.props.navigation.navigate('DrawerClose');
    this.props.navigation.navigate(screenName);
  }

  showVerificationScreen() {
    const { navigate } = this.props.navigation;
    navigate('VerifyAccount');
  }

  getRenderRow(data) {
    return (
      <SideMenuCell
        data={data.item}
        onPressMenuItem={selectedItem => this.onPressMenuItem(selectedItem)}
      />
    );
  }

  callLogoutRequest() {
    AsyncStorage.removeItem(constant.USER_DETAILS);
    resetRoute(this.props.navigation, 'Login');
    this.props.resetlogout();
  }

  logoutUser() {
    Alert.alert(
      'Are you sure you want to logout?',
      '',
      [
        { text: 'Stay Log-in', onPress: () => {} },
        { text: 'Logout', onPress: () => this.callLogoutRequest(), style: 'destructive' },
      ],
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SideMenuHeader />
        <View style={styles.bodyView}>
          <FlatList
            style={styles.flatListStyle}
            data={this.state.menuItems}
            renderItem={data => this.getRenderRow(data)}
            keyExtractor={item => item.name}
            scrollEnabled={Boolean(true)}
          />
        </View>
      </View>
    );
  }
}

Sidebar.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
  resetlogout: PropTypes.func,
};

Sidebar.defaultProps = {
  navigation: {},
  resetlogout: () => {},
};

export default Sidebar;
