import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import scaleSize from 'utils/scaleSize';
import colors from 'src/modules/colors';
import sizeVariants from 'modules/sizeVariants';

const sizeVariantStyles = {
  [sizeVariants.big]: {
    padding: scaleSize(14),
    height: scaleSize(52),
    fontSize: scaleSize(16),
    fontWeight: '300',
  },
  [sizeVariants.small]: {
    padding: scaleSize(6),
    height: scaleSize(32),
    fontSize: scaleSize(14),
    fontWeight: '300',
  },
};

const FieldContainer = styled.View`
  shadow-color: rgb(69,91,99);
  shadow-opacity: 0.2;
  shadow-offset: 0px 4px;
  shadow-radius: 12;
`;

const TextContainer = styled.TextInput`
  flex: 1;
  font-family: 'Gibson';
  border-radius: 12px;
  
  opacity: ${props => (props.opacity ? props.opacity : 1)};
  color: ${props => (props.disabled ? 'rgb(199,206,213)' : 'rgb(102,99,97)')};
  
  padding: ${props => sizeVariantStyles[props.sizeVariant].padding}px ;
  font-weight: ${props => sizeVariantStyles[props.sizeVariant].fontWeight} ;
  font-size: ${props => sizeVariantStyles[props.sizeVariant].fontSize}px;

  background-color: ${colors.white};
`;

const TextField = ({
  onBlur, onFocus, sizeVariant, ...otherProps
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <FieldContainer style={{ height: sizeVariantStyles[sizeVariant].height }}>
      <TextContainer
        {...otherProps}
        sizeVariant={sizeVariant}
        onBlur={() => {
          setIsFocused(false);
          onBlur();
        }}
        onFocus={() => {
          setIsFocused(true);
          onFocus();
        }}
        isFocused={isFocused}
      />
    </FieldContainer>
  );
};

TextField.propTypes = {
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  sizeVariant: PropTypes.oneOf(Object.values(sizeVariants)),
};

TextField.defaultProps = {
  onBlur: () => {},
  onFocus: () => {},
  sizeVariant: 'big',
};

export default TextField;
