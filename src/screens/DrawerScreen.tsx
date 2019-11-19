import React from 'react';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { DrawerNavigatorParamList } from '../navigators/DrawerNavigator';
import { StyleSheet, View, Button } from 'react-native';

type DrawerScreenRouteProp = DrawerNavigationProp<
  DrawerNavigatorParamList,
  'Drawer'
>;

type Props = {
  navigation: DrawerScreenRouteProp;
};

const DrawerScreen = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Button
        title="Click this text or swipe in from the left to toggle the drawer"
        onPress={() => navigation.toggleDrawer()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DrawerScreen;
