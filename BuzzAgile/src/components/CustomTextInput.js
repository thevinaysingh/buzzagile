import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Dimensions,
  Platform,
} from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  inputView: {
    width: (width / 3) * 2.5,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 15,
    left: 10,
    backgroundColor: 'green',
  },
  inputTitle: {
    color: 'white',
    fontSize: 15,
    fontWeight: '400',
    textAlign: 'left',
    marginBottom: 10,
  },
  textInput: {
    width: width - 80,
    fontSize: 16,
    marginLeft: 10,
    paddingBottom: 5,
    marginTop: Platform.OS === 'ios' ? 5 : -8,
    color: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
});

const CustomTextInput = ({
  title,
  titleStyle,
  value,
  onChangeText,
  placeholder,
  placeholderTextColor,
  selectionColor,
  keyboardType,
  editable,
  secureTextEntry,
  returnKeyType,
  autoCapitalize,
  autoCorrect,
  onSubmitEditing,
  onFocus,
  inputKey,
  getTextInputReference,
  inputView,
  textInput,
  paddingRight,
}) => (
  <View style={inputView}>
    {title !== '' && <Text style={[styles.inputTitle, titleStyle]}>{title}</Text>}
    <TextInput
      style={textInput}
      ref={(ref) => {
        getTextInputReference(inputKey, ref);
      }}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor}
      selectionColor={selectionColor}
      keyboardType={keyboardType}
      underlineColorAndroid="transparent"
      secureTextEntry={secureTextEntry}
      editable={editable}
      returnKeyType={returnKeyType}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      onSubmitEditing={() => onSubmitEditing(inputKey)}
      onFocus={() => onFocus()}
      paddingRight={paddingRight}
    />
  </View>
);

CustomTextInput.propTypes = {
  title: PropTypes.string,
  titleStyle: PropTypes.objectOf(PropTypes.any),
  value: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  selectionColor: PropTypes.string,
  keyboardType: PropTypes.string,
  editable: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  returnKeyType: PropTypes.string,
  autoCapitalize: PropTypes.string,
  autoCorrect: PropTypes.bool,
  onSubmitEditing: PropTypes.func,
  onFocus: PropTypes.func,
  inputKey: PropTypes.string,
  getTextInputReference: PropTypes.func,
  onChangeText: PropTypes.func,
  paddingRight: PropTypes.number,
  inputView: PropTypes.objectOf(PropTypes.any),
  textInput: PropTypes.objectOf(PropTypes.any),
};

CustomTextInput.defaultProps = {
  title: '',
  titleStyle: {},
  value: '',
  placeholder: '',
  placeholderTextColor: 'white',
  selectionColor: 'white',
  keyboardType: 'default',
  editable: true,
  secureTextEntry: false,
  returnKeyType: 'done',
  autoCapitalize: 'none',
  autoCorrect: false,
  onSubmitEditing: () => {},
  onFocus: () => {},
  inputKey: '',
  getTextInputReference: () => {},
  onChangeText: () => {},
  inputView: {},
  paddingRight: 1,
  textInput: {},
};
export default CustomTextInput;
