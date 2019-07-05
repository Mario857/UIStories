import styled from 'styled-components';
import colors from 'modules/colors';

const Card = styled.View`
  background-color: ${colors.white};
  padding: ${props => (props.padding ? props.padding : 18)}px;
  border-radius: 8px;
  shadow-color: black;
  shadow-opacity: 0.2;
  shadow-offset: 0px 3px;
  shadow-radius: 7.49;
`;

const CardRow = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 0;
`;

export {
  Card,
  CardRow,
};
