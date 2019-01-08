import { Platform, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const isIOS = Platform.OS === 'ios';

export const isIphoneX = isIOS && height === 812;

export const NavBarHeight = isIOS ? 64 : 44;

export const statusBarHeight = isIOS ? 20 : 0;
