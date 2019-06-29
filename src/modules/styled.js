
import styled from 'styled-components';
import { PixelRatio } from 'react-native';

const MainContainer = styled.View`
  flex: 1;
  background-color: rgb(250,250,250);
  height: 100%;
`;

const BackgroundImage = styled.ImageBackground`
  position: absolute;
  width: 100%;
  height: 62%;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
`;

const MainOverlay = styled.View`
  padding: 20px;
  height: 100%;
`;

const MainSafeArea = styled.SafeAreaView`
  height: 100%;
`;

// TODO map common gaps to screen size
const FieldGap = styled.View`
  height: ${props => PixelRatio.roundToNearestPixel(props.gap) || 0}px;
  width: ${props => (props.orientation === 'horizontal' && PixelRatio.roundToNearestPixel(props.gap)) || 0};
`;

const CenteredContent = styled.View`
  align-items: center;
`;

const FlexRow = styled.View`
  flex-direction: row;
  align-items: center;
`;

const FooterContent = styled(CenteredContent)`
  bottom: 0;
`;

export {
  MainContainer,
  BackgroundImage,
  MainOverlay,
  MainSafeArea,
  FieldGap,
  FlexRow,
  FooterContent,
  CenteredContent,
};
