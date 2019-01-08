import { Dimensions } from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import Splash from '../screens/Splash';
import SideMenu from '../screens/SideMenu';
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
  DrawerStack: {
    screen: DrawerStack,
  },
  Splash: {
    screen: Splash,
    key: 'SplashScreen',
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  Home: {
    screen: Home,
    key: 'HomeScreen',
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
}, {
  initialRouteName: 'Splash',
  headerMode: 'none',
});

export default RootNavigator;
