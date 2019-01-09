import React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#1D2E4344',
  },
  optionsView: {
    position: 'absolute',
    bottom: Platform.OS === 'ios' ? 10 : 30,
    paddingHorizontal: 10,
    width,
  },
  optionsListView: {
    marginBottom: 0,
  },
  buttonContainerWhite: {
    alignSelf: 'center',
    marginVertical: 6,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: width - 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '900',
    alignSelf: 'center',
  },
  dividerLine: {
    flex: 1,
    height: 1,
    opacity: 0.4,
    backgroundColor: '#E0E0E0',
  },
  cancelButton: {
    flex: 1,
    height: 55,
    justifyContent: 'center',
    backgroundColor: '#848D98',
    borderRadius: 5,
  },
  showPopupContainer: {
    position: 'absolute',
    width,
    height,
    backgroundColor: '#1D2E4344',
  },
  hidePopupContainer: {
    position: 'absolute',
    width: 0,
    height: 0,
    opacity: 0,
    right: 0,
    backgroundColor: 'white',
  },
});

const ContextMenu = ({ children, cancelButtonAction }) => (
  <View style={styles.showPopupContainer}>
    <View style={styles.optionsView}>
      <View style={[styles.optionsListView]}>
        <View style={styles.buttonContainerWhite}>
          {children}
        </View>
      </View>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => cancelButtonAction()}
      >
        <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>

);


ContextMenu.propTypes = {
  children: PropTypes.node.isRequired,
  cancelButtonAction: PropTypes.func.isRequired,
};

export default ContextMenu;
