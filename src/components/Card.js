import styled from 'styled-components';
import colors from 'modules/colors';

const Card = styled.View`
  background-color: ${colors.white};
  padding: ${props => (props.padding ? props.padding : 18)}px;
  border-radius: 8px;
  box-shadow: 10px 5px 5px rgba(83, 149, 181, 0.1);
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
