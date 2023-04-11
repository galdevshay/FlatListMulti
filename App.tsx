import React, {useEffect, useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {ItemData} from './MultiFlat/types';
import {DATA} from './MultiFlat/Mock';
import Main from './MultiFlat/Main';
import SvgComponent from './MultiFlat/Background';

const App = () => {
  const [data] = useState<ItemData[]>(DATA);
  useEffect(() => {}, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <Main dataa={data} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
