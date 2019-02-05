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
  Dimensions,
  TouchableOpacity
} from 'react-native';
import NavigationBar from '../../components/NavigationBar';
import images from 'assets/images';
import QuizOption from './QuizOption';

export let navigatorObject = null;

const header = "Please Select Quizz Mode";
const detail = "There are many variation of passages of Loram ipsam available, but the majority have suffered alteration in some form";

class Home extends Component {
  constructor(props) {
    super(props);
    navigatorObject = props.navigation;
  }

  componentDidMount() {

  }

  sideMenuAction() {
    this.props.navigation.openDrawer('DrawerOpen');
  }

  popBack() {
    const { goBack } = this.props.navigation;
    goBack(null);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationBar
          title="Dashboard"
          showBackButton={ Boolean(false) }
          rightButtonAction={ () => this.sideMenuAction() }
          showRightButton={ Boolean(true) }
        />
        <View style={{ flex: 1, alignItems: 'center', marginHorizontal: 30 }}>
          <Text style={{ fontSize: 20, color: 'purple' }}>{ header }</Text>
          <Text style={{ marginTop: 15, color: 'gray', textAlign: 'center' }}>{ detail }</Text>
        </View>
        <View style={{flex: 4, backgroundColor: 'green'}}>
          <QuizOption />
        </View>
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
