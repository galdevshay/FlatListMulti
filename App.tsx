import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import BarCode from './screen/Camera/BarCode';
import Chain from './screen/Chain/Main';
import {NavigationContainer} from '@react-navigation/native';
import FlatListMemo from './screen/MultiFlat/Main';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Order from './screen/Chain/order';
const Drawer = createDrawerNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Bar Code">
        <Drawer.Screen name="Bar Code" component={BarCode} />
        <Drawer.Screen name="Chain" component={Chain} />
        <Drawer.Screen name="Flat memo" component={FlatListMemo} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
