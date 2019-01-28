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
  StyleSheet,
  SafeAreaView,
} from 'react-native';
// import images from 'assets/images';
import QuizTypes from './QuizTypes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
  },
  rowStyle: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  columnStyle: {
    flex: 1,
    width: '100%',
  },
});

const QuizOption = props => (
  <SafeAreaView style={ styles.container }>
    <View style={ styles.rowStyle }>
      <View style={ styles.columnStyle }>
        <QuizTypes />
      </View>
      <View style={ styles.columnStyle }>
        <QuizTypes />
      </View>
    </View>
    <View style={ styles.rowStyle }>
      <View style={ styles.columnStyle }>
        <QuizTypes />
      </View>
      <View style={ styles.columnStyle }>
        <QuizTypes />
      </View>
    </View>
  </SafeAreaView>
);

QuizOption.propTypes = {
};

QuizOption.defaultProps = {
};

export default QuizOption;
