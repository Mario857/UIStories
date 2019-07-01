import { createBottomTabNavigator } from 'react-navigation';
import SignupView from './SignupView';
import LoginView from './LoginView';

const AuthNavigator = createBottomTabNavigator(
  {
    Signup: {
      screen: SignupView,
      navigationOptions: {
        header: null,
      },
    },
    Login: {
      screen: LoginView,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Signup',
    // Render null custom header will be used
    tabBarComponent: () => null,
  },
);

export default AuthNavigator;
