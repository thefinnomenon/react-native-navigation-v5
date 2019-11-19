import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ColorStackNavigator from './ColorStackNavigator';
import DrawerNavigator from '../navigators/DrawerNavigator';

const BottomTabs = createBottomTabNavigator();

const TabNavigator = () => (
  <BottomTabs.Navigator>
    <BottomTabs.Screen name="Home" component={HomeScreen} />
    <BottomTabs.Screen name="Color" component={ColorStackNavigator} />
    <BottomTabs.Screen name="Drawer" component={DrawerNavigator} />
  </BottomTabs.Navigator>
);

export default TabNavigator;
