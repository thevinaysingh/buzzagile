import {
    NetInfo,
    Dimensions,
    Platform,
} from 'react-native';
import DismissKeyboard from 'dismissKeyboard';
import { NavigationActions, StackActions } from 'react-navigation';

export const dismissKeyboardHandler = () => DismissKeyboard();

export const isObject = value => Object.prototype.toString.call(value).slice(8, -1) === 'Object';

export const isString = value => Object.prototype.toString.call(value).slice(8, -1) === 'String';

export const capitalize = s => ((typeof s !== 'string') ? '' : s.charAt(0).toUpperCase() + s.slice(1));

export const getRatio = (val1, val2) => Math.round(Number(val1) / Number(val2) * 100);

export const isIphoneX = isIOS && height === 812;

// platform specific constant
const iOSNavbarHeight = 64;
const androidNavbarHeight = 44;
const iOSStatusbarHeight = 20;
const androidStatusbarHeight = 0;

export const isIOS = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';
export const NavBarHeight = isIOS ? iOSNavbarHeight : androidNavbarHeight;
export const statusBarHeight = isIOS ? iOSStatusbarHeight : androidStatusbarHeight;

// utility functions
const sizeDenominator = 765;

export const windowSize = () => Dimensions.get('window');

export const responsiveSize = (value) => {
    const { width, height } = windowSize();

    return (Math.sqrt((height * height) + (width * width)) * (value / sizeDenominator));
};

export const isNetworkConnected = (action) => {
    NetInfo.isConnected.fetch().then((isConnected) => {
        action(isConnected);
    });
};

export const isEmpty = (object) => {
    if (object
     && Object.keys(object).length > 0) {
        return false;
    }

    return true;
};

/**
 * @param {string} routeName
 * @param {object} params
 * @param {object} navigation
*/
export const resetRouteWithParams = (
    routeName, params, navigation,
) => {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [
            NavigationActions.navigate({ routeName, params }),
        ],
        key: null,
    });

    navigation.dispatch(resetAction);
};

/**
* @param {object} navigation
* @param {string} screenName
*/
export const resetRoute = (navigation, screenName) => {
    const resetAction = StackActions.reset({
        index: 0,
        actions: [
        NavigationActions.navigate({ routeName: screenName }),
        ],
        key: null,
    });
navigation.dispatch(resetAction);
};

/**
 * @param {object} apiResponse
 * @returns {boolean}
 */
export const isResponseValid = (apiResponse) => {
    if (apiResponse.status && apiResponse.status >= 200 && apiResponse.status <= 300) {
        return true;
    }
    return false;
};

/**
 * @param {object} apiResponse
 * @returns {boolean}
 */
export const isResponseValidated = (apiResponse) => {
    if (apiResponse.status !== undefined && apiResponse.response !== undefined) {
        return true;
    }
    return false;
};

/**
 * @param {object} apiResponse
 * @returns {boolean}
 */
export const isResponseSuccess = (apiResponse) => {
    if (apiResponse.status &&
        apiResponse.status >= 200 &&
        apiResponse.status <= 300 &&
        apiResponse.response !== undefined) {
        return true;
    }
    return false;
};

export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const monthNames = [
      'Jan', 'Feb', 'Mar',
      'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct',
      'Nov', 'Dec',
    ];
    const day = date.getDate() < 10 ? ['0', date.getDate()].join('') : date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const dateArray = [day, monthNames[monthIndex]];
    const finalDate = dateArray.join(' ');
    return finalDate.toString();
};

export const formatTime = (dateString) => {
    const date = new Date(dateString);
    const finalHour = date.getHours().toString().length < 2 ? `0${date.getHours()}` : date.getHours();
    const finalMinutes = date.getMinutes().toString().length < 2 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${finalHour}:${finalMinutes}`;
}
