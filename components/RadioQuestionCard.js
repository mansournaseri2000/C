import * as React from 'react';
import {useState} from 'react';

import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';

const RadioQuestionCard = ({question, dir}) => {
  const navigation = useNavigation();
  const [isLiked, setIsLiked] = useState([
    {id: 1, value: true, name: 'Crowding', selected: false},
    {id: 2, value: false, name: 'Gpas', selected: false},
    {id: 3, value: false, name: 'Crookedness', selected: false},
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
    <View style={styles.radioquestion}>
      <View style={dir == 'ltr' ? styles.radioquwrapper : styles.radioquwrapperRTL}>
        <View style={styles.iconwrapper}>
          <Image
            style={styles.packagePlusIcon}
            resizeMode="contain"
            source={require('../assets/icons/help-circle.png')}
          />
        </View>
        <View style={styles.radioquwrapper1}>
          <Text style={styles.radiotext}>
            {question}
          </Text>
        </View>
      </View>
      <View style={styles.frameParent}>
      {isLiked.map(item => (
        <View style={dir == 'ltr' ? styles.radioButtonContainer : styles.radioButtonContainerRTL}>
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
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  radioquestion: {
    paddingBottom: 16,
    alignSelf: 'stretch',
  },
  radioquwrapper: {
    backgroundColor: Color.bgBrown,
    alignSelf: 'stretch',
    borderRadius: 12,
    padding: 8,
    padding: 8,
    flexDirection: 'row',
  },
  radioquwrapperRTL: {
    backgroundColor: Color.bgBrown,
    alignSelf: 'stretch',
    borderRadius: 12,
    padding: 8,
    padding: 8,
    flexDirection: 'row-reverse',
  },
  radioquwrapper1: {
    marginLeft: 8,
    // height: 40,
    flex: 1,
  },

  radiotext: {
    color: Color.colorPrimary,
    alignSelf: 'stretch',
    fontSize: 16,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },

  iconwrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    padding: 8,
    flexDirection: 'row',
  },
  packagePlusIcon: {
    height: 24,
    width: 24,
    overflow: 'hidden',
  },
  frameParent: {
    marginTop: 8,
    paddingVertical: 0,
    paddingHorizontal: 16,
    alignSelf: 'stretch',
  },
  rectangleParent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rectangleGroup: {
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameChildLayout: {
    height: 22,
    backgroundColor: Color.colorDarkgray,
    borderRadius: 100,
    width: 24,
  },
  crowding: {
    marginLeft: 8,
    textAlign: 'left',
    color: Color.colorWhite,
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 45,
  },
  radioButtonContainerRTL: {
    flexDirection: 'row-reverse',
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
    backgroundColor: Color.colorPrimary,
  },
  radioButtonText: {
    padding:8,
    fontSize: 16,
    marginLeft: 16,
  },
});

export default RadioQuestionCard;
