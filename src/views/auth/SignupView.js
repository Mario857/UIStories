import React from 'react';
import styled from 'styled-components';
import { View, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import {
  MainSafeArea, MainContainer, FieldGap, CenteredContent,
} from 'modules/styled';

import { Card, CardRow } from 'src/components/Card';
import TextField from 'src/components/TextField';
import Label from 'src/components/Label';
import Link from 'src/components/Link';
import Button from 'src/components/Button';
import BlueCircle from 'src/assets/images/blue-circle.png';
import GreenCircle from 'src/assets/images/green-circle.png';
import YellowCircle from 'src/assets/images/yellow-circle.png';

const TabNavContainer = styled.View`
  background-color: rgba(185,185,185,0.2);
  width: 150px;
  flex-direction: row;
  border-radius: 100;
`;

const StyledBlueCircle = styled.ImageBackground`
  position: absolute;
  width: 295px;
  height: 295px;
  left: 204px;
  z-index: 99;
  top: -15px;
`;

const StyledYellowCircle = styled.ImageBackground`
  position: absolute;
  top: 175px;
  width: 79px;
  height: 79px;
  left: 177px;
  z-index: 89;
`;

const StyledGreenCircle = styled.ImageBackground`
  position: absolute;
  bottom: -30px;
  width: 414px;
  height: 414px;
  left: -212px;
  z-index: 89;
`;

const BackgroundLayout = () => (
  <View style={{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }}
  >
    <StyledBlueCircle source={BlueCircle} width={295} height={295} />
    <StyledYellowCircle source={YellowCircle} width={79} height={79} />
    <StyledGreenCircle source={GreenCircle} width={414} height={414} />
  </View>
);

const SignupView = ({ navigation }) => (
  <MainContainer>
    <BackgroundLayout />
    <FieldGap gap={212} />
    <Card style={{ flex: 1 }}>
      <CenteredContent>
        <TabNavContainer>
          <Button
            sizeVariant="big"
            text="Login"
            fullWidth
            styleVariant="transparent"
            upperCased={false}
          />
          <Button
            sizeVariant="big"
            text="Signup"
            fullWidth
            styleVariant="secondary"
            upperCased={false}
          />
        </TabNavContainer>
      </CenteredContent>
      <FieldGap gap={34} />
      <TextField placeholder="Email Address" />
      <FieldGap gap={16} />
      <TextField placeholder="Password" />
      <FieldGap gap={16} />
      <TextField placeholder="Sign in with Facebook" />
      <FieldGap gap={16} />
      <TextField placeholder="Sign in with Google" />
      <FieldGap gap={34} />
      <CenteredContent>
        <Label upperCased={false}>
        By pressing “submit” you agree to our
        </Label>
        <Link>
        terms & conditions
        </Link>
        <FieldGap gap={25} />

        <View style={{ width: 130 }}>
          <Button text="Submit" />
        </View>
      </CenteredContent>
    </Card>
    <FieldGap gap={111} />
  </MainContainer>
);

SignupView.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
};


export default SignupView;
