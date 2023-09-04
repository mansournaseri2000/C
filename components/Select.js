import React from 'react';
import {useState} from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {StyleSheet, Text, View} from 'react-native';
export default function Select() {
  const [value, setValue] = useState();
  const item = [
    {label: 'JavaScript', value: 'JavaScript'},
    {label: 'TypeScript', value: 'TypeScript'},
    {label: 'Python', value: 'Python'},
    {label: 'Java', value: 'Java'},
    {label: 'C++', value: 'C++'},
    {label: 'C', value: 'C'},
    {label: 'Html', value: 'Html'},
    {label: 'CSS', value: 'CSS'},
    {label: 'SASS', value: 'SASS'},
    {label: 'React', value: 'React'},
    {label: 'React-native', value: 'React-native'},
    {label: 'LESS', value: 'LESS'},
  ];
  async function onchange(value) {
    setValue(value);
  }
  console.log(value);
  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <RNPickerSelect
       style={{
        ...pickerSelectStyles,
        height: 80,
        iconContainer: {
          top: 20,
          right: 10,
        },
        placeholder: {
          color: 'purple',
          fontSize: 12,
          fontWeight: 'bold',
        },
      }}
        placeholder={{label: 'Select a patient...', value: null}}
        value={value}
        onValueChange={value => onchange(value)}
        items={item}
        >
        </RNPickerSelect>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
  },
});



const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, 
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30, 
  },
});