import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';

Feather.loadFont();

export default function Radio() {
  const [isLiked, setIsLiked] = useState([
    {id: 1, value: true, name: 'Yes', selected: false},
    {id: 2, value: false, name: 'No', selected: false},
    {id: 3, value: false, name: '-', selected: false},
  ]);
  const onRadioBtnClick = item => {
    let updatedState = isLiked.map(isLikedItem =>
      isLikedItem.id === item.id
        ? {...isLikedItem, selected: true}
        : {...isLikedItem, selected: false},
    );
    setIsLiked(updatedState);
  };

  return (
    <>
      <Text style={styles.text}>Do you like react native?</Text>
      {isLiked.map(item => (
        <View style={styles.radioButtonContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onRadioBtnClick(item)}
            style={styles.radioButton}>
            {item.selected ? <View style={styles.radioButtonIcon} /> : null}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onRadioBtnClick(item)}>
            <Text style={styles.radioButtonText}>{item.name}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </>
  );
}

const styles = StyleSheet.create({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 45,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: '#98CFB6',
  },
  radioButtonText: {
    width:100,
    padding:8,
    fontSize: 16,
    marginLeft: 16,
  },
});
