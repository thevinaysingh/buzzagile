
import {
    Alert,
} from 'react-native';

export const showAlert = ({
    title,
    message,
    primaryButton,
    buttonCancel,
    action,
}) => {
    const actions = [];

    if (primaryButton) {
        actions.push({ text: primaryButton, onPress: action });
    }

    if (buttonCancel) {
        actions.push({ text: buttonCancel });
    }

    if (actions.length === 0) {
        actions.push({ text: 'OK' });
    }

    Alert.alert(
        title,
        message,
        actions,
    );
};
