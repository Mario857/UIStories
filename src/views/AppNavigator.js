import { createStackNavigator, createAppContainer } from 'react-navigation';

import { LoginView, SignupView } from 'views/auth';

const AppNavigator = createStackNavigator(
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
  },
);

export default createAppContainer(AppNavigator);
