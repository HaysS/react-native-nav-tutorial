import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const MainNavigator = createSwitchNavigator({
  Main: MainTabNavigator,
});

export default createAppContainer(MainNavigator)