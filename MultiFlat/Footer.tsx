import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
type FooterProp = {
  select: number;
  size: number;
  selectAll: () => void;
  unSelectAll: () => void;
};
const Footer = (props: FooterProp) => {
  const {select, size, selectAll, unSelectAll} = props;
  //const x = data.filter(x => x.select).length;
  //const y = data.length;

  let str = `choose ${select} from ${size}`;
  if (select === 0) str = 'none choose';
  return (
    <View style={style.container}>
      <Text style={style.selectText}>{str}</Text>
      <TouchableOpacity onPress={selectAll} style={style.button}>
        <Text style={style.buttonText}>Select all</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={unSelectAll} style={style.button}>
        <Text style={style.buttonText}>Unselect all</Text>
      </TouchableOpacity>
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
