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
import { images } from 'assets/images';
import { showAlert } from 'utils/alert';
import SideMenuCell from './components/SideMenuCell';
import SideMenuHeader from './components/SideMenuHeader';
import { resetRoute } from 'utils/helpers';
import constant, { color, width } from 'config/appConfig';
import { localizeStrings } from './localizeStrings';

const leftPadding = (Platform.OS === 'android') ? 56 : 64;

const menuData = [
  {
    name: localizeStrings.leader_board,
    // icon: images.lobby,
  },
  {
    name: localizeStrings.statics,    // icon: images.lock,
  },
  {
    name: localizeStrings.profile,    // icon: images.mybets,
  },
  {
    name: localizeStrings.setting,    // icon: images.profile,
  },
  {
    name: localizeStrings.invite_friends,    // icon: images.wallet,
  },
  {
    name: localizeStrings.upcomming_challenges,    // icon: images.wallet,
  },
  {
    name: localizeStrings.notification,    // icon: images.wallet,
  },
  {
    name: localizeStrings.logout,
    // icon: images.logout,
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  bodyView: {
    flex: 1.5,
    // backgroundColor: 'white',
    width: width - leftPadding,
    marginHorizontal: 50,
    backgroundColor: 'red',
  },
  flatListStyle: {
    flex: 1,
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
    console.log('********** menu', selectedItem, localizeStrings.leader_board);
    switch (selectedItem) {
    case localizeStrings.leader_board:
      this.props.navigation.closeDrawer('DrawerClose');
      break;
    case localizeStrings.statics:
      this.props.navigation.closeDrawer('DrawerClose');
      // this.props.navigation.navigate('MyBets');
      break;
    case localizeStrings.profile:
      // this.navigateToScreen('MatchDetail');
      break;
    case localizeStrings.setting:
      // this.navigateToScreen('Profile');
      break;
    case localizeStrings.invite_friends:
      // this.navigateToScreen('Profile');
      break;
    case localizeStrings.upcomming_challenges:
      // this.navigateToScreen('Profile');
      break;
    case localizeStrings.notification:
      // this.navigateToScreen('Profile');
      break;
    case localizeStrings.logout:
      // this.props.navigation.navigate('DrawerClose');
      // this.logoutUser();
      // showPopupAlert('This will be covered in next milestone');
      break;
    default:
      break;
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
        data={ data.item }
        onPressMenuItem={ selectedItem => this.onPressMenuItem(selectedItem) }
      />
    );
  }

  sideMenuClose() {
    console.log('=========', this.props.navigation)
    this.props.navigation.closeDrawer('DrawerClose');
  }

  // callLogoutRequest() {
  //   AsyncStorage.removeItem(constant.USER_DETAILS);
  //   resetRoute(this.props.navigation, 'Login');
  //   this.props.resetlogout();
  // }

  // logoutUser() {
  //   Alert.alert(
  //     'Are you sure you want to logout?',
  //     '',
  //     [
  //       { text: 'Stay Log-in', onPress: () => {} },
  //       { text: 'Logout', onPress: () => this.callLogoutRequest(), style: 'destructive' },
  //     ],
  //   );
  // }

  render() {
    return (
      <View style={styles.container}>
        <SideMenuHeader sideMenuClose={ () => this.sideMenuClose() } />
        <View style={ styles.bodyView}>
          <FlatList
            style={ styles.flatListStyle }
            data={ this.state.menuItems }
            renderItem={ data => this.getRenderRow(data) }
            keyExtractor={ item => item.name }
            scrollEnabled={ Boolean(true) }
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
