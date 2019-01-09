import {
  Alert,
  View,
} from 'react-native';

export const showPopupAlert = (message) => {
  Alert.alert(
    '',
    message,
    [
      { text: 'OK' },
    ],
  );
};

export const showPopupAlertWithTitle = (title, message) => {
  Alert.alert(
    title,
    message,
    [
      { text: 'OK' },
    ],
  );
};

export const showOptionAlert = (message, buttonOk, buttonCancel, action) => {
  Alert.alert(
    '',
    message,
    [
      { text: buttonOk, onPress: action },
      { text: buttonCancel },
    ],
  );
};