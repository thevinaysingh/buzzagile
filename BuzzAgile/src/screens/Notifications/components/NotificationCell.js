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

// import { 14, responsiveFontSize } from '../../../utils/utils_functions';
// import Loader from '../../../components/Loader';

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // margin: 5,
  //   height: 70,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  container: {
    backgroundColor: 'white',
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    height: 90,
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
    fontSize: 13,
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

const NotificationCell = (props) => {
  return (
    <View style={ styles.container }>
      <View style={ styles.optionalView }>
        <View style={ [styles.imageContainer, { marginLeft: 5}] }>
          <Image
            source={ images.sphere_purple }
            style={{ width: 30, height: 30 }}
          />
        </View>
        <View style={{ flex: 4, marginLeft: 5 }}>
          <Text style={ styles.textStyle }>
            Notification is here this view is for optional text.
          </Text>
        </View>
        <View style={[styles.imageContainer, { flex: 1 }]}>
          <ImageBackground
            source={ images.rupee_btn }
            style={{ width: 60, height: 30 }}
          >
            <Text style={{ justifyContent: 'center', textAlign: 'center', width: 40, top: 5 }}>hiii</Text>
          </ImageBackground>
        </View>
      </View>
      <View style={ styles.optionView }>
        <View style={ styles.optionContainer }>
          <TouchableOpacity
            onPress={() => null}
            style={{ height: 30, width: 50 }}
          >
            <Image
              source={ images.rupee_btn }
              style={{ width: 80, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => null }
            style={{ height: 30, width: 50, marginRight: 50 }}
          >
            <Image
              source={ images.rupee_btn }
              style={{ width: 80, height: 40 }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

NotificationCell.propTypes = {
};

NotificationCell.defaultProps = {
};

export default NotificationCell;
