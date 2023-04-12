import React, {useCallback, useState} from 'react';
import {FlatList} from 'react-native';
import Item from './Item';
import {ItemData} from './types';
import Header from './Header';
import Footer from './Footer';
import {DATA} from './Mock';
type MainProps = {
  dataa: ItemData[];
};

const FlatListMemo = () => {
  const [data, setData] = useState<ItemData[]>(DATA);
  const change = useCallback((index: number) => {
    data[index].select = !data[index].select;
    setData([...data]);
  }, []);

  const renderItem = ({item, index}: {item: ItemData; index: number}) => {
    return (
      <Item
        select={data[index].select}
        item={item}
        onPress={() => change(index)}
      />
    );
  };
  return (
    <>
      <Header />
      <FlatList
        style={{flex: 0.8, backgroundColor: '#606060'}}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <Footer
        select={data.filter(x => x.select).length}
        size={data.length}
        selectAll={() => {
          data.forEach(el => {
            el.select = true;
          });
          setData([...data]);
        }}
        unSelectAll={() => {
          data.forEach(el => {
            el.select = false;
          });
          setData([...data]);
        }}
      />
    </>
  );
};
export default FlatListMemo;
