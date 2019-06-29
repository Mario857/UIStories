import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import scaleSize from 'utils/scaleSize';
import colors from 'modules/colors';

import styleVariants from 'modules/styleVariants';
import sizeVariants from 'modules/sizeVariants';
import StandaloneIcon from './StandaloneIcon';

const sizeVariantStyles = {
  [sizeVariants.big]: {
    padding: scaleSize(14),
    height: scaleSize(48),
    fontSize: scaleSize(14),
    fontWeight: '500',
  },
  [sizeVariants.small]: {
    padding: scaleSize(6),
    height: scaleSize(32),
    fontSize: scaleSize(14),
    fontWeight: '500',
  },
};

const variantStyles = {
  [styleVariants.primary]: {
    color: colors.midOrange,
  },

  [styleVariants.secondary]: {
    color: colors.darkGray,
  },

  [styleVariants.facebook]: {
    color: colors.facebookBlue,
  },
};

const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 100;
  margin: 0;
  overflow: hidden;

  opacity: ${props => (props.disabled ? 0.4 : 1)};
  padding: ${props => sizeVariantStyles[props.sizeVariant].padding}px;

  background-color: ${props => variantStyles[props.styleVariant].color};
`;

const ButtonText = styled.Text`
  font-family: 'Mosk';
  font-size: ${props => sizeVariantStyles[props.sizeVariant].fontSize}px;
  font-weight: ${props => sizeVariantStyles[props.sizeVariant].fontWeight};

  color: ${colors.white};
`;

const Button = ({
  disabled, Icon, onPress, text, styleVariant, sizeVariant, upperCased,
}) => (
  <View style={{ height: sizeVariantStyles[sizeVariant].height }}>
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress} disabled={disabled} activeOpacity={0.5}>
      <ButtonContainer styleVariant={styleVariant} sizeVariant={sizeVariant} disabled={disabled}>
        {text && (
          <ButtonText
            numberOfLines={1}
            sizeVariant={sizeVariant}
            ellipsizeMode={text.length < 2 ? 'clip' : 'tail'}
          >
            {upperCased ? text.toUpperCase() : text}
          </ButtonText>
        )}
        <View style={{ position: 'absolute', right: 8 }}>
          {Icon && <StandaloneIcon Icon={Icon} color={colors.white} />}
        </View>
      </ButtonContainer>
    </TouchableOpacity>
  </View>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  Icon: PropTypes.func,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
  styleVariant: PropTypes.oneOf(Object.values(styleVariants)),
  sizeVariant: PropTypes.oneOf(Object.values(sizeVariants)),
  upperCased: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  Icon: undefined,
  text: undefined,
  styleVariant: 'primary',
  sizeVariant: 'big',
  upperCased: true,
};

export default Button;
