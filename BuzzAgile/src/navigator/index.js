
import { StackNavigator } from 'react-navigation';
import { createKeyScreen, screens } from './screens-name';
import { DrawerStack } from './dashboardStack';
import Splash from '../screens/Splash';
import Slider from '../screens/Slider';
import SelectLanguage from '../screens/SelectLanguage';
import Notification from '../screens/Notification';

const RootNavigator = StackNavigator({
  Dashboard: { screen: DrawerStack },
  Splash: {
    screen: Splash,
    key: createKeyScreen(screens.SPLASH),
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  Slider: {
    screen: Slider,
    key: 'SliderScreen',
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  SelectLanguage: {
    screen: SelectLanguage,
    key: createKeyScreen(screens.SELECT_LANGUAGE),
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  Notification: {
    screen: Notification,
    key: createKeyScreen(screens.NOTIFICATION),
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
}, {
  initialRouteName: screens.INITIAL_SCREEN,
  headerMode: 'none',
});

export default RootNavigator;

