import React, {useEffect, useState} from 'react';
import {FlatList, TextInput, View, TouchableOpacity, Text} from 'react-native';
import Item from './Item';
import {Datum} from './types';
import Header from './Header';
import Footer from './Footer';
import {getData} from './Mock';
import {useNavigation} from '@react-navigation/native';
import Order from './order';
export const ITEM_HEIGHT = 80;
const Main = () => {
  const [data, setData] = useState<Datum[]>([]);
  const [filterData, setFilterData] = useState<Datum[]>([]);
  const [query, setQuery] = useState('');
  const navigation = useNavigation();
  const [sortName, setSortName] = useState(false);
  const [sortPrice, setSortPrice] = useState(false);
  useEffect(() => {
    getData()
      .then(value => {
        const a = value;
        const b = a.sort((a: Datum, b: Datum) => {
          if (a.quote.USD.price > b.quote.USD.price) return -1;
          return 1;
        });
        const c = b.filter(x => x.quote.USD.price > -0.1);
        setData(c);
        setFilterData(c);
      })
      .catch(ex => {
        console.log(ex);
      });
  }, []);

  /*const change = useCallback((index: number) => {
    //data[index].select = !data[index].select;
    setData([...data]);
  }, []);
  */
  const renderItem = ({item, index}: {item: Datum; index: number}) => {
    return <Item item={item} />;
  };
  useEffect(() => {
    setFilterData(data.filter(x => x.name.includes(query)));
  }, [query]);
  const sortdataup = () => {
    setFilterData(
      data.sort((a, b) => {
        if (a.quote.USD.percent_change_24h > b.quote.USD.percent_change_24h)
          return 1;
        return -1;
      }),
    );
    setSortPrice(!sortPrice);
  };
  const sortNameUp = () => {
    setFilterData(
      data.sort((a, b) => {
        if (a.name > b.name) return 1;
        return -1;
      }),
    );
    setSortName(!sortName);
  };
  const sortNameDown = () => {
    setFilterData(
      data.sort((a, b) => {
        if (a.name > b.name) return 1;
        return -1;
      }),
    );
    setSortName(!sortName);
  };
  const sortdatadown = () => {
    setFilterData(
      data.sort((a, b) => {
        if (a.quote.USD.percent_change_24h > b.quote.USD.percent_change_24h)
          return -1;
        return 1;
      }),
    );
    setSortPrice(!sortPrice);
  };
  useEffect(() => {}, [filterData]);
  return (
    <>
      <Header />
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: '#808080',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
          }}
          onPress={sortdataup}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sort1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={sortdatadown}
          style={{
            flex: 1,
            backgroundColor: '#808080',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
          }}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Sort2</Text>
        </TouchableOpacity>
        <TextInput
          placeholder={'coin name'}
          placeholderTextColor={'white'}
          clearButtonMode="while-editing"
          style={{
            backgroundColor: 'lightblue',
            fontSize: 20,
            flex: 4,
            paddingHorizontal: 20,
            borderWidth: 1,
            marginHorizontal: 10,
            borderColor: 'blue',
          }}
          onChangeText={setQuery}
        />
      </View>

      <FlatList
        style={{flex: 0.8, backgroundColor: '#606060'}}
        data={filterData}
        renderItem={renderItem}
        getItemLayout={(data, index) => {
          return {
            length: ITEM_HEIGHT,
            offset: index * ITEM_HEIGHT,
            index,
          };
        }}
        keyExtractor={item => item.symbol}
      />
      <Footer size={filterData.length} />
    </>
  );
};
export default Main;
