import React from 'react';
import { RouteProp } from '@react-navigation/core';
import { ColorStackNavigatorParamList } from '../navigators/ColorStackNavigator';
import { View } from 'react-native';

type ColorScreenRouteProp = RouteProp<ColorStackNavigatorParamList, 'Color'>;

type Props = {
  route: ColorScreenRouteProp;
};

const ColorScreen = ({ route }: Props) => {
  const { color } = route.params;

  return <View style={{ flex: 1, backgroundColor: color }} />;
};

export default ColorScreen;
