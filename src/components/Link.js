import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
import scaleSize from 'src/utils/scaleSize';
import colors from 'src/modules/colors';

const DescriptionLink = styled.Text`
  font-family: 'Mosk';
  font-size: ${scaleSize(14)}px;
  color: ${colors.lightYellow};
  font-weight: 600;
`;

const Link = ({ onPress, disabled, children }) => (
  <TouchableOpacity onPress={onPress} disabled={disabled}>
    <DescriptionLink>{children}</DescriptionLink>
  </TouchableOpacity>
);

Link.propTypes = {
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
};

Link.defaultProps = {
  disabled: false,
};
export default Link;
