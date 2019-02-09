import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground
} from 'react-native';
import { images } from 'assets/images';
import SwitchToggle from 'react-native-switch-toggle';

// import { 14, responsiveFontSize } from '../../../utils/utils_functions';
// import Loader from '../../../components/Loader';

const styles = StyleSheet.create({
  container: {
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    height: 50,
    width: '100%',
    justifyContent: 'space-between',
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
    fontSize: 18,
    justifyContent: 'center',
    // textAlign: 'center',
  },
  optionView: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
  },
  optionContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
  },
});

const Notification = (props) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.optionalView }>
        <View style={{ flex: 4, justifyContent: 'center', marginLeft: 10 }}>
          <Text style={ styles.textStyle }>
            Notification
          </Text>
        </View>
        <View style={[styles.imageContainer, { flex: 1 }]}>
          <SwitchToggle
            switchOn={props.switchOn}
            // onPress={() => props.toggleButton()}
          />
  
        </View>
      </View>
    </View>
  );
};

Notification.propTypes = {
};

Notification.defaultProps = {
};

export default Notification;
