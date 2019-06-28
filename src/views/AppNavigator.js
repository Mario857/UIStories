import { createStackNavigator, createAppContainer } from 'react-navigation';

import SignupView from 'views/auth/SignupView';

const AppNavigator = createStackNavigator(
  {
    Signup: {
      screen: SignupView,
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
