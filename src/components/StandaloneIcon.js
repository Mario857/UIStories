import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconWrapper = styled.View`
  width: ${props => (props.size ? props.size - (props.offsetX || 0) : 25)}px;
  height: ${props => (props.size ? props.size - (props.offsetY || 0) : 25)}px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const StandaloneIcon = ({
  Icon, color, size, offsetX, offsetY,
}) => (
  <IconWrapper offsetX={offsetX} offsetY={offsetY} size={size}>
    <Icon
      color={color}
      width={size && size.toString()}
      height={size && size.toString()}
      preserveAspectRatio="none"
    />
  </IconWrapper>
);

StandaloneIcon.propTypes = {
  Icon: PropTypes.func.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
  offsetX: PropTypes.number,
  offsetY: PropTypes.number,
};

StandaloneIcon.defaultProps = {
  color: 'rgb(211,216,220)',
  size: 24,
  offsetX: 0,
  offsetY: 0,
};

export default StandaloneIcon;
