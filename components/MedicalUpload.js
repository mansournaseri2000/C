import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';

const MedicalUpload = ({label, option}) => {
  const [radioBtnselectedIndex, setRadioBtnselectedIndex] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.uploadcontainer}>
        <View style={styles.titilewrapper}>
          <View style={styles.labelwrapper}>
            <Text style={styles.labeltext}>{label}</Text>
          </View>
          <View style={styles.labelwrapper}>
            <Text style={styles.selectivetext}>{option}</Text>
          </View>
        </View>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.sampleimageIcon}
          resizeMode="contain"
          source={require('../assets/SmileImg.png')}
        />
      </View>
      <View style={styles.uploadwrapper}>
        <TouchableOpacity style={styles.gallerybtn} activeOpacity={0.8}>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require('../assets/icons/imagePrimary.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.camerabtn} activeOpacity={0.8}>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require('../assets/icons/cameraPrimary.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  uploadcontainer: {
    padding: 8,
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
    overflow: 'hidden',
  },
  titilewrapper: {
    alignItems: 'center',
    justifyContent:'center'
    // flex: 1,
  },
  labelwrapper: {
    borderRadius: 12,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  labeltext: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    color: Color.colorPrimary,
    // flex: 1,
  },
  selectivetext: {
    fontSize: 16,
    textAlign: 'center',
    // flex: 1,
    color: Color.colorDarkgray,
    fontFamily: 'Poppins-Regular',
  },
  imagecontainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 16,
  },
  sampleimageIcon: {
    width:200,
    height:140,
  },
  uploadwrapper: {
    marginVertical: 16,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  gallerybtn: {
    padding: 16,
    alignItems: 'center',
    // paddingVertical: 40,
    backgroundColor: Color.colorSecondary,
    borderRadius: 100,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  camerabtn: {
    // paddingVertical: 40,
    backgroundColor: Color.colorSecondary,
    borderRadius: 100,
    justifyContent: 'center',
    flexDirection: 'row',
    marginLeft: 16,
    padding: 16,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
});

export default MedicalUpload;
