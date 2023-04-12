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

  useEffect(() => {
    const nativeEventListener = DeviceEventEmitter.addListener('BarCode', e => {
      setBarCode(e.BarCode);
      console.log(e);
    });

    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  console.log('header');
  return (
    <View style={style.container}>
      <TouchableOpacity
        style={{
          backgroundColor: 'green',
          borderWidth: 1,
          alignItems: 'center',
          borderRadius: 5,
          height: 40,
          justifyContent: 'center',
          width: 150,
        }}
        onPress={openCamera}>
        <Text style={{color: 'white', fontSize: 20}}>Open Camera</Text>
      </TouchableOpacity>
      <Text style={style.text}>Main</Text>
      <Text style={style.text}>{barcode}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  text: {fontWeight: 'bold', fontSize: 30},

  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    flex: 0.1,
    backgroundColor: '#5050dd',
  },
});
export default Header;
