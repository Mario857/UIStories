
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { CenteredContent } from 'src/modules/styled';
import Button from 'src/components/Button';

const TabNavContainer = styled.View`
  background-color: rgba(185,185,185,0.2);
  width: 150px;
  flex-direction: row;
  border-radius: 100;
`;

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
    <CenteredContent>
      <TabNavContainer>
        {decoratedRoutes.map((route => (
          <Button
            key={route.key}
            onPress={() => navigation.navigate(route.key)}
            sizeVariant="big"
            text={route.routeName}
            fullWidth
            styleVariant={route.isActive ? 'secondary' : 'transparent'}
            upperCased={false}
          />
        )))}
      </TabNavContainer>
    </CenteredContent>
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
