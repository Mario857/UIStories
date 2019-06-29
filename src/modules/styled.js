
import styled from 'styled-components';
import { PixelRatio } from 'react-native';
import colors from './colors';

const MainContainer = styled.View`
  flex: 1;
  background-color: ${colors.white};
  height: 100%;
  padding: 24px;
`;

const MainSafeArea = styled.SafeAreaView`
  height: 100%;
  background-color: ${colors.white};
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
  MainSafeArea,
  FieldGap,
  FlexRow,
  FooterContent,
  CenteredContent,
};
