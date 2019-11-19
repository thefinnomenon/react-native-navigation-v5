import React from 'react';
import { StackNavigationProp } from '@react-navigation/stack';
import { ColorStackNavigatorParamList } from '../navigators/ColorStackNavigator';
import { StyleSheet, View, Button } from 'react-native';

type ChooseColorScreenNavigationProp = StackNavigationProp<
  ColorStackNavigatorParamList,
  'ChooseColor'
>;

type Props = {
  navigation: ChooseColorScreenNavigationProp;
};

const ChooseColorScreen = ({ navigation }: Props) => (
  <View style={styles.container}>
    <Button
      title="Red"
      onPress={() => navigation.navigate('Color', { color: 'red' })}
    />
    <Button
      title="Blue"
      onPress={() => navigation.navigate('Color', { color: 'blue' })}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ChooseColorScreen;
