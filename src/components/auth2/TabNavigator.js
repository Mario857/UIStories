import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from 'src/modules/colors';
import scaleSize from 'src/utils/scaleSize';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TabNavContainer = styled.View`
  background-color: ${colors.white};
  border-color: rgb(244,244,246);
  border-width: 1.2px;
  height: ${scaleSize(44)};
  flex-direction: row;
  
  shadow-color: rgb(69,91,99);
  shadow-opacity: 0.2;
  shadow-offset: 0px 5px;
  shadow-radius: 2;
`;

const StyledTabButton = styled.View`
  flex: 1;
  border-right-color: rgb(244,244,246);
  border-right-width: 1px;
  padding-top: ${scaleSize(12)}px;
  align-items: center;
`;

const StyledButtonText = styled.Text`
  font-family: 'Gibson';
  font-weight: 400;
  text-transform: uppercase;
  font-size: ${scaleSize(14)}px;
  color: ${props => (props.isActive ? colors.slate : 'rgb(149,157,173)')};
`;

const ColoredUnderlineContainer = styled.View`
  flex-direction: row;
  height: ${scaleSize(5)}px;
`;

const ColoredUnderline = styled.View`
  background-color: ${props => props.color};
  border-right-color: ${colors.white};
  border-right-width: 0.1px;
  flex: 1;
`;

const TabButton = ({
  isActive,
  onPress,
  text,
  underlineColors,
}) => (
  <View style={{ flex: 1 }}>
    <TouchableOpacity
      onPress={onPress}
      disabled={isActive}
      style={{ height: '100%' }}
    >
      <StyledTabButton>
        <StyledButtonText
          isActive={isActive}
        >
          {text}
        </StyledButtonText>
      </StyledTabButton>
      {isActive && (
      <ColoredUnderlineContainer>
        {underlineColors.map(color => <ColoredUnderline key={color} color={color} />)}
      </ColoredUnderlineContainer>
      )}
    </TouchableOpacity>
  </View>
);

TabButton.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  underlineColors: PropTypes.arrayOf(PropTypes.string),
};

TabButton.defaultProps = {
  underlineColors: [colors.cornFlower, colors.cornFlower1, colors.dodgerBlue, colors.aquaMarine],
};

const TabNavigator = ({ navigation }) => {
  const parentNavigation = navigation.dangerouslyGetParent();
  const { routes } = parentNavigation.state;
  const activeRoute = navigation.state.routeName;
  const decoratedRoutes = routes.map(route => ({
    key: route.key,
    routeName: route.routeName,
    isActive: route.routeName === activeRoute,
  }));

  return (
    <TabNavContainer>
      {decoratedRoutes.map(route => (
        <TabButton
          isActive={route.isActive}
          onPress={() => navigation.navigate(route.key)}
          text={route.routeName}
          key={route.key}
        />
      ))}
    </TabNavContainer>
  );
};

TabNavigator.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    state: PropTypes.string,
    dangerouslyGetParent: PropTypes.func,
  }).isRequired,
};

export default TabNavigator;
