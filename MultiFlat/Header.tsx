import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={style.container}>
      <Text style={{fontWeight: 'bold', fontSize: 30}}>Main</Text>
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.1,
    backgroundColor: 'blue',
  },
});
export default Header;
