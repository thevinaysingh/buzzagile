import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  menuIconContainer: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  defaultIcon: {
    width: 25,
    height: 25,
    margin: 5,
    marginRight: 18,
  },
  defaultWhiteLabel: {
    fontSize: 17,
    color: 'white',
    fontFamily: 'RobotoCondensed-Regular',
  },
});

const SideMenuCell = props => (
  <View style={{ flex: 1 }}>
    <TouchableOpacity
      style={styles.menuIconContainer}
      onPress={() => props.onPressMenuItem(props.data.name)}
    >
      <Image style={styles.defaultIcon} source={props.data.icon} />
      <Text style={styles.defaultWhiteLabel}>{props.data.name}</Text>
    </TouchableOpacity>
  </View>
);

SideMenuCell.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string,
  onPressMenuItem: PropTypes.func,
  active: PropTypes.bool,
};

SideMenuCell.defaultProps = {
  label: 'Label missing',
  icon: '',
  onPressMenuItem: undefined,
  active: false,
};

export default SideMenuCell;
