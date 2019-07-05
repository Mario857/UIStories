
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { MainContainer, FieldGap } from 'src/modules/styled';
import BlueCircle from 'src/assets/images/auth/blue-circle.png';
import GreenCircle from 'src/assets/images/auth/green-circle.png';
import YellowCircle from 'src/assets/images/auth/yellow-circle.png';
import breakpoints from 'src/modules/breakpoints';

const { height: windowHeight } = Dimensions.get('window');

const StyledBlueCircle = styled.ImageBackground`
  position: relative;
  width: 295px;
  height: 295px;
  left: 204px;
  z-index: 99;
  top: -15px;
`;

const StyledYellowCircle = styled.ImageBackground`
  position: relative;
  top: 175px;
  width: 79px;
  height: 79px;
  left: 177px;
  z-index: 89;
`;

const StyledGreenCircle = styled.ImageBackground`
  position: relative;
  bottom: -30px;
  width: 414px;
  height: 414px;
  left: -212px;
  z-index: 89;
`;

const BackgroundImageLayout = () => (
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


const AuthLayout = ({ isKeyboardUp, children }) => (
  <KeyboardAwareScrollView style={{ height: '100%' }}>
    <MainContainer>
      <BackgroundImageLayout />
      <FieldGap gap={windowHeight >= breakpoints.lg ? 200 : 20} />
      {children}
      <FieldGap gap={isKeyboardUp ? 0 : 75} />
    </MainContainer>
  </KeyboardAwareScrollView>
);


AuthLayout.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  isKeyboardUp: PropTypes.bool.isRequired,
  children: PropTypes.oneOf([PropTypes.object, PropTypes.node]).isRequired,
};

export default AuthLayout;
