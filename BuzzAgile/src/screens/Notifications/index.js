import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, Text, TouchableOpacity, FlatList } from 'react-native';
import { RootContainer } from 'components/AppStyledComponents';
import { screens } from 'navigator/screens-name';
import Navigation from 'components/NavigationBar';
import { images } from 'assets/images';
import NotificationCell from './components/NotificationCell';
/**
  * @desc this class will display the options to redirect to login or signup
  * @author Pushpendra mishra pushpendra.mishra660@gmail.com
  * @required null
*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
  },
  optionalView: {
    flexDirection: 'row',
    paddingVertical: 10,
    backgroundColor: 'transparent',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    color: 'purple',
    fontSize: 12,
  },
  optionView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    marginVertical: 15,
  },
  optionContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
  }
});

const cellRender = {

}
class Welcome extends Component {
  constructor(props) {
    super(props);
  }

  onPressGetStarted() {
    this.props.navigation.navigate(screens.ENTER_PHONE);
  }

  onPressLogin() {
    this.props.navigation.navigate(screens.LOGIN);
  }

  render() {
    return (
      <RootContainer>
        <View style={{ flex: 2, alignItems: 'center' }}>
          <Navigation />
          <FlatList
            data={[{key: 'a'}, {key: 'b'}, {key: 'c'}, {key: 'd'}]}
            renderItem={({item}) => (<NotificationCell {...item} />)}
            />
        </View>
      </RootContainer>
    );
  }
}

Welcome.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Welcome;
