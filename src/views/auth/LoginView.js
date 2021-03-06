import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import {
  FieldGap,
  CenteredContent,
} from 'modules/styled';

import { Card } from 'src/components/auth/Card';
import TextField from 'src/components/auth/TextField';
import Label from 'src/components/auth/Label';
import Link from 'src/components/auth/Link';
import Button from 'src/components/auth/Button';
import withKeyboardInfo from 'src/utils/withKeyboardInfo';
import AuthLayout from 'src/components/auth/layout/AuthLayout';
import TabNavigator from 'src/components/auth/TabNavigator';

const LoginView = ({ isKeyboardUp, navigation }) => (
  <AuthLayout isKeyboardUp={isKeyboardUp}>
    <Card style={{ zIndex: 999, flex: 1 }}>
      <TabNavigator navigation={navigation} />
      <FieldGap gap={24} />
      <TextField placeholder="Username or Email" />
      <FieldGap gap={16} />
      <TextField placeholder="Password" />
      <FieldGap gap={16} />
      <TextField editable={false} placeholder="Login in with Facebook" />
      <FieldGap gap={16} />
      <TextField editable={false} placeholder="Login in with Google" />
      <FieldGap gap={34} />
      <CenteredContent>
        <Label upperCased={false}>
        Don’t have an account?
        </Label>
        <Link onPress={() => console.warn('Open signup')}>
        Sign up
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
