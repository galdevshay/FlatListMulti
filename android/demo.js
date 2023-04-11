import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import SelectMultiple from 'react-native-select-multiple';

const fruits = ['Apples', 'Oranges', 'Pears'];
// --- OR ---
// const fruits = [
//   { label: 'Apples', value: 'appls' },
//   { label: 'Oranges', value: 'orngs' },
//   { label: 'Pears', value: 'pears' }
// ]

const renderLabel = (label, style) => {
  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <View style={{marginLeft: 10}}>
        <Text style={style}>{label}</Text>
      </View>
    </View>
  );
};

class Demo extends Component {
  state = {selectedFruits: []};

  onSelectionsChange = selectedFruits => {
    // selectedFruits is array of { label, value }
    this.setState({selectedFruits});
  };

  render() {
    return (
      <View>
        <SelectMultiple
          items={fruits}
          renderLabel={renderLabel}
          selectedItems={this.state.selectedFruits}
          onSelectionsChange={this.onSelectionsChange}
        />
      </View>
    );
  }
}
export default Demo;
