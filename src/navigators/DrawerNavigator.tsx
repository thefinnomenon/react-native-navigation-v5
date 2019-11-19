import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerScreen from '../screens/DrawerScreen';
import OtherScreen from '../screens/OtherScreen';

export type DrawerNavigatorParamList = {
  Drawer: undefined;
  Other: undefined;
};

const Drawer = createDrawerNavigator<DrawerNavigatorParamList>();

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Drawer" component={DrawerScreen} />
    <Drawer.Screen name="Other" component={OtherScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
