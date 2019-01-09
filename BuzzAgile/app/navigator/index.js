
import { createKeyScreen, screens } from './screens-name';
import { DrawerStack } from './dashboardStack';
import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Splash from '../screens/Splash';
import SideMenu from '../screens/SideMenu';
import Slider from '../screens/Slider';
import Home from '../screens/home';

const { width } = Dimensions.get('window');
// Drawer stack
const DrawerStack = DrawerNavigator({
  Home: {
    screen: Home,
    key: 'HomeScreen',
    navigationOptions: {
      header: null,
      gesturesEnabled: true,
    },
  },
}, {
  initialRouteName: 'Home',
  contentComponent: SideMenu,
  drawerWidth: width - 80,
});

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
}, {
  initialRouteName: screens.INITIAL_SCREEN,
  headerMode: 'none',
});

export default RootNavigator;
