import styled from 'styled-components';
import sizeVariants from 'modules/sizeVariants';
import styleVariants from 'modules/styleVariants';
import scaleSize from 'utils/scaleSize';
import colors from 'modules/colors';

const sizeVariantStyles = {
  [sizeVariants.bigger]: {
    fontSize: scaleSize(18),
    fontWeight: '400',
  },
  [sizeVariants.big]: {
    fontSize: scaleSize(14),
    fontWeight: '200',
  },
  [sizeVariants.small]: {
    fontSize: scaleSize(14),
    fontWeight: '300',
  },
};

const variantStyles = {
  [styleVariants.primary]: {
    // TODO extract
    color: colors.gray,
  },
  [styleVariants.secondary]: {
    color: colors.darkGray,
  },
  [styleVariants.title]: {
    color: colors.black,
  },
};

const Label = styled.Text`
  font-family: 'Gibson';
  font-size: ${props => sizeVariantStyles[props.sizeVariant].fontSize}px;
  font-weight: ${props => sizeVariantStyles[props.sizeVariant].fontWeight};
  letter-spacing: 0.1;
  text-transform: ${props => (props.upperCased ? 'uppercase' : 'none')};
  color: ${props => variantStyles[props.styleVariant].color};
  padding-left: ${props => scaleSize(props.left) || 0};
  padding-right: ${props => scaleSize(props.right) || 0};
`;

Label.defaultProps = {
  sizeVariant: 'big',
  styleVariant: 'primary',
  upperCased: true,
};

export default Label;
