
import { StackNavigator } from 'react-navigation';
import Splash from 'screens/Splash';
import OnBoarding from 'screens/OnBoarding';
import SelectLanguage from 'screens/SelectLanguage';
import Welcome from 'screens/Welcome';
import Login from 'screens/Login';
import EnterPhone from 'screens/EnterPhone';
import Leaderboard from 'screens/Leaderboard';
import InviteFriends from 'screens/InviteFriends';
import Notifications from 'screens/Notifications';
import Settings from 'screens/Settings';
import UpcommingChallenges from 'screens/UpcommingChallenges';
import PhoneVerification from 'screens/PhoneVerification';
import CreateProfile from 'screens/CreateProfile';
import { DrawerStack } from './dashboardStack';
import { createKeyScreen, screens } from './screens-name';

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
  OnBoarding: {
    screen: OnBoarding,
    key: createKeyScreen(screens.ON_BOARDING),
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
  Welcome: {
    screen: Welcome,
    key: createKeyScreen(screens.WELCOME),
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  Login: {
    screen: Login,
    key: createKeyScreen(screens.LOGIN),
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  EnterPhone: {
    screen: EnterPhone,
    key: createKeyScreen(screens.ENTER_PHONE),
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  PhoneVerification: {
    screen: PhoneVerification,
    key: createKeyScreen(screens.PHONE_VERIFICATION),
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  CreateProfile: {
    screen: CreateProfile,
    key: createKeyScreen(screens.CREATE_PROFILE),
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  Leaderboard: {
    key: createKeyScreen(screens.LEADERBOARD),
    screen: Leaderboard,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  InviteFriends: {
    key: createKeyScreen(screens.LEADERBOARD),
    screen: InviteFriends,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  UpcommingChallenges: {
    key: createKeyScreen(screens.LEADERBOARD),
    screen: UpcommingChallenges,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  Settings: {
    key: createKeyScreen(screens.LEADERBOARD),
    screen: Settings,
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
    },
  },
  Notifications: {
    key: createKeyScreen(screens.LEADERBOARD),
    screen: Notifications,
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
