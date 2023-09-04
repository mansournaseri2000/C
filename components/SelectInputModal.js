import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import SearchableDropdown from 'react-native-searchable-dropdown';
import Icon from 'react-native-vector-icons/FontAwesome'; // Adjust the icon library and name as needed
import {Color} from '../GlobalStyles'
const SelectInputModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const items = [
    // List of selectable items
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 1' },
    { id: 5, name: 'Item 2' },
    { id: 6, name: 'Item 3' },
    { id: 7, name: 'Item 1' },
    { id: 8, name: 'Item 2' },
    { id: 9, name: 'Item 3' },
    { id: 10, name: 'Item 1' },
    { id: 12, name: 'Item 2' },
    { id: 13, name: 'Item 3' },
    { id: 14, name: 'Item 1' },
    { id: 15, name: 'Item 2' },
    { id: 16, name: 'Item 3' },
    // Add more items as needed
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const onSelectItem = (item) => {
    setSelectedItem(item);
    toggleModal();
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.inputContainer}>
        <Text style={styles.inputText}>
          {selectedItem ? selectedItem.name : 'Select an item'}
        </Text>
        <Icon name="chevron-down" size={20} color="#999" />
      </TouchableOpacity>
      <Modal isVisible={isModalVisible} onBackdropPress={closeModal}>
        <View style={styles.modalContent}>
          <SearchableDropdown
            onItemSelect={onSelectItem}
            // containerStyle={{ padding: 5 }}
            textInputStyle={styles.searchInput}
            itemStyle={styles.itemStyle}
            itemTextStyle={styles.itemTextStyle}
            itemsContainerStyle={{ maxHeight: 150 }}
            items={items}
            placeholder="Search for an item"
            placeholderTextColor='white'
            resetValue={false}
            textInputProps={
              {
                underlineColorAndroid: "transparent",
                style: {
                    color:Color.colorWhite
                },
                onTextChange: text => console.log(text)
              }
            }
            listProps={{
              nestedScrollEnabled: true,
            }}
          />
          <TouchableOpacity onPress={toggleModal} style={styles.closeButton}>
            <Text style={styles.closetext}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor:'black'
  },
  inputContainer: {
    // borderWidth: 1,
    // borderColor: '#ccc',
    // paddingVertical: 10,
    // paddingHorizontal: 15,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignSelf:'stretch',
    color: Color.colorWhite
  },
  inputText: {
    fontSize: 16,
    color: Color.colorWhite
  },
  modalContent: {
    // backgroundColor: 'white',
    // position:'absolute',
    // bottom:0,
    // left:0,
    // right:0,
    backgroundColor: Color.bgBrown,
    padding: 20,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  searchInput: {
    padding: 10,
    
  },
  itemStyle: {
    borderRadius: 5,
    // backgroundColor: 'white',
    color: Color.colorPrimary,
    // borderColor: '#bbb',
    // borderWidth: 1,
    // borderRadius: 5,
    backgroundColor: Color.colorSecondary,
    padding: 10,
    marginTop: 2,
  },
  itemTextStyle: {
    // color: '#222',

    color: Color.colorPrimary,
    
  },
  closeButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  closetext:{
    color: Color.colorPrimary
  }
});

export default SelectInputModal;
