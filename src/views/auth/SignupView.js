import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const SignupView = ({ navigation }) => (
  <View style={{
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  }}
  >
    <Text style={{ fontFamily: 'Mosk', fontWeight: 800 }}> Example </Text>
  </View>
);

SignupView.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};


export default SignupView;
