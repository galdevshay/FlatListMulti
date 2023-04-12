import React, {useEffect, useState} from 'react';
import {
  DeviceEventEmitter,
  NativeModules,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Header = () => {
  const [barcode, setBarCode] = useState('');
  var OpenCamera = NativeModules.OpenCamera;
  const openCamera = () => {
    OpenCamera.open();
  };

  return (
    <View style={style.container}>
      <Text style={style.text}>Main</Text>
    </View>
  );
};
const style = StyleSheet.create({
  text: {fontWeight: 'bold', fontSize: 30},

  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 0.1,
    backgroundColor: '#5050dd',
  },
});
export default Header;
