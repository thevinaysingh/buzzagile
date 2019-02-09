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
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import images from 'assets/images';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowStyle: {
    width: '90%',
    height: '80%',
    backgroundColor: 'blue',
  },
  columnStyle: {
    flex: 2,
    backgroundColor: 'orange',
  },
});

const QuizTypes = props => (
  <View style={ styles.container }>
    <View style={ styles.rowStyle }>
      <View style={{ flex: 7 }}>
        <Image
          style={{
            flex: 1,
          }}
          // source={ images.profileImage }
          // resizeMode="cover"
        />
      </View>
    <View style={styles.columnStyle} />
    </View>
  </View>
);

QuizTypes.propTypes = {
};

QuizTypes.defaultProps = {
};

export default QuizTypes;
