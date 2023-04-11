import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Main</Text>
    </View>
  );
};
const style = StyleSheet.create({
  text: {fontWeight: 'bold', fontSize: 30},

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.1,
    backgroundColor: '#5050dd',
  },
});
export default Header;
