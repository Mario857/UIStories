import { createStackNavigator, createAppContainer } from 'react-navigation';

import AuthNavigator from 'views/auth2';

const AppNavigator = createStackNavigator(
  {
    Auth: {
      screen: AuthNavigator,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

export default createAppContainer(AppNavigator);
