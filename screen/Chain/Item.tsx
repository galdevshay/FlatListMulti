import React from 'react';
import {
  Animated,
  Button,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Chain, Datum} from './types';
import {ITEM_HEIGHT} from './Main';
type ItemProps = {
  item: Datum;
};

const Item = React.memo(({item}: ItemProps) => {
  console.log('render' + item.id);
  return (
    <TouchableOpacity style={styles.item}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.title}>{item.symbol}</Text>
        <Text style={styles.title}>
          {item.quote.USD.price.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </Text>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{width: 24, height: 24, marginEnd: 10}}
            source={{
              uri: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.id}.png`,
            }}
          />
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View>
          <Text style={styles.title}>
            {item.last_updated.substring(11, 19)}
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.title}>
          {item.quote.USD.volume_change_24h.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD',
          })}
        </Text>
        <Text style={styles.title}>
          {(item.quote.USD.percent_change_24h / 100).toLocaleString('en-US', {
            style: 'percent',
            minimumFractionDigits: 2,
            currency: 'USD',
          })}
        </Text>
      </View>
    </TouchableOpacity>
  );
});
export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 2,
    marginTop: 4,
    borderRadius: 16,
    backgroundColor: 'white',
    marginHorizontal: 10,
    height: ITEM_HEIGHT,
    justifyContent: 'space-around',
  },

  title: {
    fontSize: 16,
    color: 'black',
  },
});
