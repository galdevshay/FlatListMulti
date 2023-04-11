import React from 'react';
import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ItemData} from './types';
import CheckBox from '@react-native-community/checkbox';
type ItemProps = {
  item: ItemData;
  onPress: () => void;
  select: boolean;
};

const Item = React.memo(
  ({item, onPress, select}: ItemProps) => {
    console.log('render' + item.id);
    return (
      <TouchableOpacity
        style={[
          styles.item,
          {backgroundColor: item.select ? '#dddddd' : 'gray'},
        ]}
        onPress={onPress}>
        <Text style={[styles.title, {flex: 1}]}>{item.title}1</Text>
        <CheckBox
          style={{backgroundColor: 'purple'}}
          value={select}
          onChange={onPress}
        />
      </TouchableOpacity>
    );
  },
  (prev, next) => {
    if (prev.select !== next.select) return false;
    return true;
  },
);
export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginTop: 12,
    borderRadius: 16,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  checkmarkcontainer: {
    height: 20,
    width: 20,
    borderWidth: 2,
    backgroundColor: 'green',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  checkmark: {
    width: 22,
    height: 22,
  },

  checkmark_stem: {
    position: 'absolute',
    width: 3,
    height: 9,
    backgroundColor: 'white',
    left: 11,
    top: 6,
  },

  checkmark_kick: {
    position: 'absolute',
    width: 3,
    height: 3,
    backgroundColor: 'white',
    left: 8,
    top: 12,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
  },
});
