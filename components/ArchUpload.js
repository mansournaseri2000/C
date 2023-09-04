import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';

const ArchUpload = ({label}) => {
  const [radioBtnselectedIndex, setRadioBtnselectedIndex] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.inputgroup}>
      <View style={styles.inputiconwrapper}>
        <Image
          style={styles.packagePlusIcon}
          resizeMode="contain"
          source={require('../assets/icons/condition.png')}
        />
      </View>
      <View style={styles.fieldwrapper}>
        <Text style={styles.lable}>{label}</Text>
        <Text style={styles.inputphone}></Text>
      </View>
      <TouchableOpacity style={styles.iconbutton}
      activeOpacity={0.8}>
        <Image
          style={styles.packagePlusIcon}
          resizeMode="contain"
          source={require('../assets/icons/upload-cloud.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputgroup: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    padding: 8,
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
  },
  inputiconwrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
    height: 40,
    width: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    alignItems: 'center',
  },
  packagePlusIcon: {
    overflow: 'hidden',
    height: 24,
    width: 24,
  },
  fieldwrapper: {
    marginLeft: 8,
    height: 40,
    flex: 1,
  },
  lable: {
    fontSize: 16,
    alignSelf: 'stretch',
    color: Color.colorPrimary,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  inputphone: {
    color: Color.colorLightgray,
    fontSize: 12,
    alignSelf: 'stretch',
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  iconbutton: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 8,
    padding: 8,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
  },


});

export default ArchUpload;
