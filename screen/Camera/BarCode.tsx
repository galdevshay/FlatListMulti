import {
  DeviceEventEmitter,
  NativeModules,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const BarCode = () => {
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
  return (
    <View style={styles.container}>
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
      <Text>{barcode}</Text>
    </View>
  );
};

export default BarCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
