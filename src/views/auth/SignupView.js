import React from 'react';
import styled from 'styled-components';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import {
  FieldGap, CenteredContent,
} from 'modules/styled';

import { Card } from 'src/components/Card';
import TextField from 'src/components/TextField';
import Label from 'src/components/Label';
import Link from 'src/components/Link';
import Button from 'src/components/Button';
import withKeyboardInfo from 'src/utils/withKeyboardInfo';
import AuthLayout from 'src/components/layout/AuthLayout';


const TabNavContainer = styled.View`
  background-color: rgba(185,185,185,0.2);
  width: 150px;
  flex-direction: row;
  border-radius: 100;
`;

const SignupView = ({ isKeyboardUp, navigation }) => (
  <AuthLayout isKeyboardUp={isKeyboardUp}>
    <Card style={{ zIndex: 999, flex: 1 }}>
      {/* TODO Extract */}
      <CenteredContent>
        <TabNavContainer>
          <Button
            sizeVariant="big"
            text="Login"
            fullWidth
            styleVariant="transparent"
            upperCased={false}
            onPress={() => navigation.navigate('Login')}
          />
          <Button
            sizeVariant="big"
            text="Signup"
            fullWidth
            styleVariant="secondary"
            upperCased={false}
            onPress={() => navigation.navigate('Signup')}
          />
        </TabNavContainer>
      </CenteredContent>
      <FieldGap gap={24} />
      <TextField placeholder="Username" />
      <FieldGap gap={16} />
      <TextField placeholder="Email Address" />
      <FieldGap gap={16} />
      <TextField placeholder="Password" />
      <FieldGap gap={16} />
      <TextField editable={false} placeholder="Sign in with Facebook" />
      <FieldGap gap={16} />
      <TextField editable={false} placeholder="Sign in with Google" />
      <FieldGap gap={34} />
      <CenteredContent>
        <Label upperCased={false}>
        By pressing “submit” you agree to our
        </Label>
        <Link onPress={() => console.warn('Open terms and conditions')}>
        terms & conditions
        </Link>
        <FieldGap gap={25} />
      </CenteredContent>
      <CenteredContent style={{ marginTop: 'auto' }}>
        <View style={{ width: 130, position: 'relative', top: 40 }}>
          <Button text="Submit" onPress={() => console.warn('Submit')} />
        </View>
      </CenteredContent>
    </Card>
  </AuthLayout>
);

SignupView.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  isKeyboardUp: PropTypes.bool.isRequired,
};


export default withKeyboardInfo(SignupView);
