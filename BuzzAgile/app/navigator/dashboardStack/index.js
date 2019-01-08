import { Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import SideMenu from 'screens/SideMenu';
import Home from 'screens/home';
import { createKeyScreen, screens } from './screens-name';

const { width } = Dimensions.get('window');

export const DrawerStack = DrawerNavigator({
    Home: {
      screen: Home,
      key: createKeyScreen(screens.HOME),
      navigationOptions: {
        header: null,
        gesturesEnabled: true,
      },
    },
  }, {
    initialRouteName: screens.HOME,
    contentComponent: SideMenu,
    drawerWidth: width - 80,
  });