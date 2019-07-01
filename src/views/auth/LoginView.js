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
import TabNavigator from 'src/components/auth/TabNavigator';

const LoginView = ({ isKeyboardUp, navigation }) => (
  <AuthLayout isKeyboardUp={isKeyboardUp}>
    <Card style={{ zIndex: 999, flex: 1 }}>
      <TabNavigator navigation={navigation} />
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

LoginView.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  isKeyboardUp: PropTypes.bool.isRequired,
};


export default withKeyboardInfo(LoginView);
