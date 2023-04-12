import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  NativeModules,
  NativeEventEmitter,
  Text,
  TouchableOpacity,
  DeviceEventEmitter,
} from 'react-native';
import {ItemData} from './screen/MultiFlat/types';
import Main from './screen/Chain/Main';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Main />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
