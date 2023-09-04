import * as React from 'react';
import {useState} from 'react';

import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';

const RadioAccept = ({title, dir}) => {
  const navigation = useNavigation();
  const [item, setItem] = useState(false);
  const onRadioBtnClick = () => {
    setItem(!item);
  };

  return (
    <View style={styles.frameParent}>
      <View style={dir == 'ltr' ? styles.radioButtonContainer : styles.radioButtonContainerRTL}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => onRadioBtnClick()}
          style={styles.radioButton}>
          {item ? <View style={styles.radioButtonIcon} /> : null}
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onRadioBtnClick()}>
          <Text style={styles.radioButtonText}>{title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  frameParent: {
    marginTop: 8,
    paddingVertical: 0,
    // paddingHorizontal: 16,
    alignSelf: 'stretch',
  },

  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  radioButtonContainerRTL: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    marginLeft: 16,
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
    backgroundColor: Color.colorPrimary,
  },
  radioButtonText: {
    padding: 8,
    fontSize: 16,
    marginLeft: 16,
  },
});

export default RadioAccept;
