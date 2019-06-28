import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const LoginView = ({ navigation }) => (
  <View style={{
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <Text> Example </Text>
  </View>
);

LoginView.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};


export default LoginView;
