import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';
type OrderProp = {
  sortByPrice: () => void;
  sortByName: () => void;
};
export default function Order(props: OrderProp) {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <Button
        onPress={props.sortByName}
        containerStyle={{marginHorizontal: 10}}
        title={'Change'}
      />
      <Button
        onPress={props.sortByPrice}
        containerStyle={{marginHorizontal: 10}}
        title={'Name'}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
