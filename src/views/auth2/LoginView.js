import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View } from 'react-native';
import TabNavigator from 'src/components/auth2/TabNavigator';
import { FieldGap, MainContainer, CenteredContent } from 'src/modules/styled';
import TextField from 'src/components/auth2/TextField';
import Button from 'src/components/auth/Button';
import Label from 'src/components/auth/Label';

const Header = styled.View`
  width: 100%;
  height: 73px;
  background-color: rgb(255,255,255);
`;

const LoginView = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: 'rgb(247,247,250)' }}>
    <Header />
    <TabNavigator navigation={navigation} />
    <MainContainer style={{ flex: 1, backgroundColor: 'rgb(247,247,250)' }}>
      <FieldGap gap={12} />
      <TextField placeholder="Email" />
      <FieldGap gap={24} />
      <TextField placeholder="Password" />
      <FieldGap gap={41} />
      <CenteredContent>
        <Label>Forgot Password </Label>
      </CenteredContent>
      <FieldGap gap={32} />
      <Button />
    </MainContainer>
  </View>
);

LoginView.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default LoginView;
