import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import BarCode from './screen/Camera/BarCode';
const App = () => {
  return <BarCode />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
