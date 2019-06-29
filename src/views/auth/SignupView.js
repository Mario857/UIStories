import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { MainSafeArea, MainContainer, FieldGap } from 'modules/styled';

import { Card, CardRow } from 'src/components/Card';
import TextField from 'src/components/TextField';

const { height } = Dimensions.get('window');


const SignupView = ({ navigation }) => (
  <MainContainer>
    <FieldGap gap={212} />
    <Card style={{ flex: 1 }}>
      <TextField />
      <FieldGap gap={16} />
      <TextField />
      <FieldGap gap={16} />
      <TextField />
      <FieldGap gap={16} />
      <TextField />
      <FieldGap gap={16} />
      <TextField />
      <FieldGap gap={16} />

    </Card>
    <FieldGap gap={111} />
  </MainContainer>
);

SignupView.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};


export default SignupView;
