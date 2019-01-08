import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

const style = StyleSheet.create({
  contextMenuButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 58,
    marginTop: 0.25,
    marginBottom: 0.25,
    backgroundColor: '#FFFFFF',
  },
  contextMenuButtonText: {
    fontSize: 16,
    color: '#2544A7',
  },
  contextMenuButtonTextAlt: {
    fontSize: 16,
    color: '#FA0054',
  },
});

const ContextMenuButton = ({ text, altTextColor, action }) => (
  <TouchableOpacity
    style={style.contextMenuButton}
    onPress={() => action()}
  >
    <Text
      style={altTextColor ? style.contextMenuButtonTextAlt : style.contextMenuButtonText}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

ContextMenuButton.propTypes = {
  text: PropTypes.string,
  altTextColor: PropTypes.bool,
  action: PropTypes.func,
};

ContextMenuButton.defaultProps = {
  text: '',
  altTextColor: false,
  action: () => {},
};

export default ContextMenuButton;
