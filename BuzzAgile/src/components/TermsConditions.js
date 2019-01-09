/* eslint react/forbid-prop-types: 0 */

import React from 'react';
import PropTypes from 'prop-types';
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
  },
  termConditionText: {
    color: 'rgb(62, 151, 220)',
    fontSize: 16,
    textAlign: 'right',
  },
  termConditionIconTocuh: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TermsConditions = ({
  title,
  titleStyles,
  isAcceptTermsConditions,
  checkIcon,
  unCheckIcon,
  onPressCheckbox,
  onPressText,
  textPressDisabled,
}) => (
  <View style={styles.container}>
    <TouchableOpacity
      style={styles.termConditionIconTocuh}
      onPress={() => onPressCheckbox()}
    >
      <Image
        source={isAcceptTermsConditions ? checkIcon : unCheckIcon}
      />
    </TouchableOpacity>
    <TouchableOpacity
      disabled={textPressDisabled}
      onPress={() => onPressText()}
      style={{ backgroundColor: 'transparent' }}
    >
      <Text
        style={[styles.termConditionText, titleStyles]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  </View>
);

TermsConditions.propTypes = {
  title: PropTypes.string,
  isAcceptTermsConditions: PropTypes.bool,
  textPressDisabled: PropTypes.bool,
  checkIcon: PropTypes.any,
  unCheckIcon: PropTypes.any,
  onPressCheckbox: PropTypes.func,
  onPressText: PropTypes.func,
  titleStyles: PropTypes.objectOf(PropTypes.any),
};

TermsConditions.defaultProps = {
  title: '',
  isAcceptTermsConditions: false,
  textPressDisabled: false,
  checkIcon: null,
  unCheckIcon: null,
  onPressCheckbox: () => {},
  onPressText: () => {},
  titleStyles: {},
};
export default TermsConditions;
