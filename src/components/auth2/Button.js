import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import styled from 'styled-components';
import PropTypes from 'prop-types';
import scaleSize from 'utils/scaleSize';
import colors from 'modules/colors';

import styleVariants from 'modules/styleVariants';
import sizeVariants from 'modules/sizeVariants';
import StandaloneIcon from 'components/shared/StandaloneIcon';

const sizeVariantStyles = {
  [sizeVariants.big]: {
    padding: scaleSize(12),
    height: scaleSize(52),
    fontSize: scaleSize(14),
    fontWeight: '500',
  },
  [sizeVariants.medium]: {
    padding: scaleSize(6),
    height: scaleSize(36),
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
    color: colors.aquaMarine,
  },

  [styleVariants.secondary]: {
    color: colors.lightGreen,
  },

  [styleVariants.facebook]: {
    color: colors.facebookBlue,
  },
  [styleVariants.transparent]: {
    color: 'transparent',
  },
  [styleVariants.third]: {
    color: colors.white,
  },
};

const ButtonContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border-radius: 12px;
  margin: 0;
  overflow: hidden;

  opacity: ${props => (props.disabled ? 0.4 : 1)};
  padding: ${props => sizeVariantStyles[props.sizeVariant].padding}px;

  background-color: ${props => variantStyles[props.styleVariant].color};

`;

const ButtonText = styled.Text`
  font-family: 'Gibson';
  font-size: ${props => sizeVariantStyles[props.sizeVariant].fontSize}px;
  font-weight: ${props => sizeVariantStyles[props.sizeVariant].fontWeight};

  color: ${props => (props.styleVariant === styleVariants.transparent ? 'rgba(29,34,38,0.2)' : colors.white)};
`;

const Button = ({
  disabled, Icon, onPress, text, styleVariant, sizeVariant, upperCased, fullWidth,
}) => (
  <View style={{ height: sizeVariantStyles[sizeVariant].height, ...fullWidth ? { flex: 1 } : {} }}>
    <TouchableOpacity style={{ flex: 1 }} onPress={onPress} disabled={disabled} activeOpacity={0.5}>
      <ButtonContainer styleVariant={styleVariant} sizeVariant={sizeVariant} disabled={disabled}>
        {text && (
          <ButtonText
            numberOfLines={1}
            sizeVariant={sizeVariant}
            styleVariant={styleVariant}
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
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  disabled: false,
  fullWidth: false,
  Icon: undefined,
  text: undefined,
  styleVariant: 'primary',
  sizeVariant: 'big',
  upperCased: true,
};

export default Button;
