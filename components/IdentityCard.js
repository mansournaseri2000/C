
import * as React from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';

const IdentityCard = ({iconSrc, label, label1="Optional", imgsrc, dir="ltr"}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.indentifycard}>
      <View style={dir == "ltr" ? styles.inputgroup : styles.inputgroupRTL }> 
        <View style={styles.iconbutton}>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={iconSrc}
          />
        </View>
        <Text style={dir == "ltr" ? styles.label : styles.labelRTL}>{label}</Text>
        <Text style={styles.label1}>{label1}</Text>
      </View>
      <Image
        style={styles.identificationimageIcon}
        resizeMode="contain"
        source={imgsrc}
      />
      <View style={styles.uploadwrapper}>
        <TouchableOpacity style={styles.gallerybtn}>
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={require('../assets/icons/imagePrimary.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.camerabtn}>
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
  indentifycard: {
    backgroundColor: Color.bgBrown,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    overflow: 'hidden',
    borderRadius: 12,
    // alignSelf: 'stretch',
  },
  inputgroup: {
    flexDirection: 'row',
    // borderRadius: 12,
  },
  inputgroupRTL:{
    flexDirection:'row-reverse',
  },
  iconbutton: {
    padding: 8,
    height: 40,
    width: 40,
    justifyContent: 'center',
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    // flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
  label: {
    textAlign: 'right',
    flex: 1,
    marginLeft: 8,
    color: Color.colorPrimary,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  labelRTL: {
    textAlign: 'right',
    flex: 1,
    marginRight: 8,
    color: Color.colorPrimary,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  label1: {
    textAlign: 'right',
    marginLeft: 8,
    color: Color.colorPrimary,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  identificationimageIcon: {
    height:150,
    marginTop: 8,

  },
  uploadwrapper: {
    paddingHorizontal: 8,
    marginTop: 8,
    paddingVertical: 0,
    // justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  gallerybtn: {
    paddingVertical: 8,
    backgroundColor: Color.gray,
    paddingHorizontal: 8,
    borderRadius: 50,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:Color.bgBlack,
  },

  camerabtn: {
    marginLeft: 16,
    paddingVertical: 4,
    backgroundColor: Color.gray,
    paddingHorizontal: 8,
    borderRadius: 50,
    justifyContent: 'center',
    height: 40,
    width: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor:Color.bgBlack,
  },
});

export default IdentityCard;
