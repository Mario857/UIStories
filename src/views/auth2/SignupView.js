import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import TabNavigator from 'src/components/auth2/TabNavigator';
import { FieldGap, MainContainer } from 'src/modules/styled';
import TextField from 'src/components/auth2/TextField';
import Button from 'src/components/auth2/Button';
import Header from 'src/components/auth2/Header';


const SignupView = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: 'rgb(247,247,250)' }}>
    <Header />
    <TabNavigator navigation={navigation} />
    <MainContainer style={{ flex: 1, backgroundColor: 'rgb(247,247,250)' }}>
      <FieldGap gap={12} />
      <TextField placeholder="Username" />
      <FieldGap gap={24} />
      <TextField placeholder="Email" />
      <FieldGap gap={24} />
      <TextField placeholder="Password" />
      <FieldGap gap={32} />
      <Button text="Continue" />
    </MainContainer>
  </View>
);

SignupView.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default SignupView;
