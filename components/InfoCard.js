import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';

const InfoCard = ({lable='Information', description='Desctiption', dir='ltr'}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.inputgroupSpaceBlock}>
      <View style={dir == 'ltr' ? styles.inputgroupFlexBox : styles.inputgroupFlexBoxRTL}>
        <View style={styles.iconbutton}>
          <Image
            style={styles.arrowLeftIcon}
            resizeMode="contain"
            source={require('../assets/icons/info.png')}
          />
        </View>
        <Text style={dir == 'ltr' ? styles.label : styles.labelRTL}>{lable}</Text>
      </View>
      <View style={styles.infotextwrapper}>
        <Text
          style={dir == 'ltr' ? styles.infotext : styles.infotextRTL }>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputgroupSpaceBlock: {
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
    alignSelf: 'stretch',
  },
  inputgroupFlexBox: {
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  inputgroupFlexBoxRTL:{
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row-reverse',
    alignSelf: 'stretch',
  },
  iconbutton: {
    width: 40,
    padding: 8,
    flexDirection: 'row',
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
  label: {
    marginHorizontal: 8,
    flex: 1,
    fontSize: 18,
    color: Color.colorPrimary,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  labelRTL: {
    marginHorizontal: 8,
    flex: 1,
    fontSize: 18,
    color: Color.colorPrimary,
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
  },
  infotextwrapper: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  infotext: {
    fontSize: 16,
    color: Color.colorLightgray,
    paddingHorizontal:8,
    flex: 1,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  infotextRTL: {
    fontSize: 16,
    color: Color.colorLightgray,
    paddingHorizontal:8,
    flex: 1,
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
  },
});

export default InfoCard;
