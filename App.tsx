import React from 'react';
import { NavigationNativeContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import TabNavigator from './src/navigators/TabNavigator';

enableScreens();

const App = () => (
  <NavigationNativeContainer>
    <TabNavigator />
  </NavigationNativeContainer>
);

export default App;
