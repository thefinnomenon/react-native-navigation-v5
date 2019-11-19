import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChooseColorScreen from '../screens/ChooseColorScreen';
import ColorScreen from '../screens/ColorScreen';

export type ColorStackNavigatorParamList = {
  ChooseColor: undefined;
  Color: { color: 'blue' | 'red' };
};

const Stack = createStackNavigator<ColorStackNavigatorParamList>();

const ColorStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="ChooseColor"
      component={ChooseColorScreen}
      options={{ title: 'Choose Color' }}
    />
    <Stack.Screen
      name="Color"
      component={ColorScreen}
      options={({ route }) => ({ title: route.params.color })}
    />
  </Stack.Navigator>
);

export default ColorStackNavigator;
