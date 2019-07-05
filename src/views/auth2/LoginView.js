import React from 'react';
import { View } from 'react-native';
import TabNavigator from 'src/components/auth2/TabNavigator';
import { MainSafeArea, MainContainer } from 'src/modules/styled';

const LoginView = ({ navigation }) => (
  <MainSafeArea>
    <TabNavigator navigation={navigation} />
  </MainSafeArea>
);

export default LoginView;
