import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
type FooterProp = {
  size: number;
};
const Footer = (props: FooterProp) => {
  const {size} = props;
  //const x = data.filter(x => x.select).length;
  //const y = data.length;

  return (
    <View style={style.container}>
      <Text style={style.selectText}>{size}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  selectText: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'black',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 0.1,
    backgroundColor: 'lightblue',
  },
  button: {
    backgroundColor: 'blue',
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    height: 30,
  },
  buttonText: {textAlign: 'center', fontWeight: 'bold', fontSize: 20},
});
export default Footer;
