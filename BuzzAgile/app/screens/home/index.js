/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Animated,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import StatusBar from '../../components/StatusBar';
const { width, height } = Dimensions.get('window');
import NavigationBar from '../../components/NavigationBar';
import images from '../../assets/images';

export let navigatorObject = null;

class Home extends Component {
  constructor(props) {
    super(props);
    navigatorObject = props.navigation;
  }

  componentDidMount() {

  }
  sideMenuAction() {
    console.log('===============');
    this.props.navigation.navigate('DrawerOpen');
  }
  popBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
      <NavigationBar
        title='test'
        showBackButton={Boolean(true)}
        // backButtonImage={images.backbutton}
        backButtonAction={() => this.popBack()}
        // backButtonAction={() => this.sideMenuAction()}
        hideRightView={true}
      />
        <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.popBack()}
              style={{ color: 'black', height: 50, width: 60 , backgroundColor: 'red'}}
            >
         <Text>Back</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any),
};

Home.defaultProps = {
  navigation: {},
};

export default Home;
