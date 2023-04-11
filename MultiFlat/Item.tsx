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

          {
            backgroundColor: '#dddddd',
            opacity: item.select ? 1 : 0.6,
          },
        ]}
        onPress={onPress}>
        <Text style={styles.title}>{item.title}</Text>
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

  title: {
    fontWeight: 'bold',
    fontSize: 24,
    color: 'black',
    flex: 1,
  },
});
