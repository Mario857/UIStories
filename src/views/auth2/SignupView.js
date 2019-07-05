import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View } from 'react-native';
import TabNavigator from 'src/components/auth2/TabNavigator';

const Header = styled.View`
  width: 100%;
  height: 73px;
  background-color: rgb(255,255,255);
`;

const SignupView = ({ navigation }) => (
  <View style={{ flex: 1, backgroundColor: 'rgb(247,247,250)' }}>
    <Header />
    <TabNavigator navigation={navigation} />
  </View>
);

SignupView.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};

export default SignupView;
