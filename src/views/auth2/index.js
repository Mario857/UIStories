import { createBottomTabNavigator } from 'react-navigation';
import SignupView from './SignupView';
import LoginView from './LoginView';

const AuthNavigator = createBottomTabNavigator(
  {
    Login: {
      screen: LoginView,
      navigationOptions: {
        header: null,
      },
    },
    Signup: {
      screen: SignupView,
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
