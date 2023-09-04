import * as React from 'react';
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';
import PrimaryBtnSmall from '../components/PrimaryBtnSmall';
import GhostBtn from './PrimaryGhostBtn';
import SecondaryBtnSmall from './SecondaryBtnSmall';

const NewCaseCard = ({
  fullname = 'fullname',
  phone = '+49xxxxxxxx',
  price = '1000',
  dir = 'ltr',
}) => {
  const navigation = useNavigation();
  function handleAccept() {
    navigation('DentistDiffAccept');
  }
  function handlePayment() {
    navigation('PaypalLogin');
  }
  return (
    <View style={dir == 'ltr' ? styles.card : styles.cardRTL}>
      <Image
        style={styles.profilewrapperIcon}
        resizeMode="contain"
        source={require('../assets/SampleProfileImg.png')}
      />
      <View style={dir == 'ltr' ? styles.infowrapper : styles.infowrapperRTL}>
        <View style={styles.namewrapper}>
          <Text
            style={dir == 'ltr' ? styles.nametext : styles.nametextRTL}
            numberOfLines={1}
            ellipsizeMode="tail">
            {fullname}
          </Text>
          <Text style={dir == 'ltr' ? styles.phone : styles.phoneRTL}>
            {phone}
          </Text>
        </View>
        <View style={dir == 'ltr' ? styles.actions : styles.actionsRTL}>
          <View style={styles.acceptCard}>
            <SecondaryBtnSmall buttonText="Archive" handler={handleAccept} />
          </View>
          <View style={styles.priceCard}>
            <PrimaryBtnSmall buttonText={'Login'} handler={handlePayment} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    padding: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: Color.bgBrown,
    flexDirection: 'row',
  },
  cardRTL: {
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    padding: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
    backgroundColor: Color.bgBrown,
    flexDirection: 'row-reverse',
  },
  profilewrapperIcon: {
    width: 48,
    height: 48,
    overflow: 'hidden',
  },
  infowrapper: {
    marginLeft: 8,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  infowrapperRTL: {
    marginLeft: 8,
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  namewrapper: {
    flexBasis: '50%',
    // flexWrap: 'wrap',
    // flexDirection: 'row',
    // alignSelf: 'stretch',
    // alignItems: 'center',
  },
  nametext: {
    textAlign: 'left',
    color: Color.colorWhite,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  nametextRTL: {
    textAlign: 'right',
    color: Color.colorWhite,
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
  },
  phoneRTL: {
    textAlign: 'right',
    color: Color.colorDarkgray,
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  detailcontainer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  phonewrapper: {
    flex: 1,
  },
  phone: {
    color: Color.colorDarkgray,
    textAlign: 'left',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
  },
  actions: {
    // justifyContent: 'flex-end',
    justifyContent: 'space-between',
    marginLeft: 4,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionsRTL:{
    justifyContent: 'space-between',
    marginLeft: 4,
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  acceptCard: {
    marginHorizontal: 8,
  },
  priceCard: {
    // marginHorizontal: 4,
  },
});

export default NewCaseCard;
