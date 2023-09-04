import * as React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';

const OrderCard = ({fullname, productname, price, dateorder, trackcode, datepost, dir="ltr"}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.alignertrackcard}>
      <View style={dir == 'ltr' ? styles.fullnamewrapper : styles.fullnamewrapperRTL}>
        <Image
          style={styles.userIcon}
          resizeMode="contain"
          source={require('../assets/icons/userPrimary.png')}
        />
        <Text style={styles.fullnametext}>{fullname}</Text>
      </View>
      <View style={dir == 'ltr' ? styles.alignertypewrapper : styles.alignertypewrapperRTL}>
        <Image
          style={styles.userIcon}
          resizeMode="contain"
          source={require('../assets/icons/boxPrimary.png')}
        />
        <Text style={styles.alignertypetext}>{productname}</Text>
      </View>
      <View style={styles.alignerpaymentwrapper}>
        <View style={dir == 'ltr' ? styles.pricewrapper : styles.pricewrapperRTL}>
          <Image
            style={styles.userIcon}
            resizeMode="contain"
            source={require('../assets/icons/baggage-claimPrimary.png')}
          />
          <Text style={styles.alignertypetext}>€ {price}</Text>
        </View>
        <View style={dir == 'ltr' ? styles.pricewrapper : styles.pricewrapperRTL}>
          <Image
            style={styles.userIcon}
            resizeMode="cover"
            source={require('../assets/icons/calendarPrimary.png')}
          />
          <Text style={styles.alignertypetext}>{dateorder}</Text>
        </View>
      </View>
      <View style={styles.alignerpaymentwrapper}>
        <View style={dir == 'ltr' ? styles.trackcodewrapper  : styles.trackcodewrapperRTL}>
          <Image
            style={styles.userIcon}
            resizeMode="contain"
            source={require('../assets/icons/boxPrimary.png')}
          />
          <Text style={styles.greeting}>{trackcode}</Text>
        </View>
        <View style={dir == 'ltr' ? styles.datecodewrapper : styles.datecodewrapperRTL}>
          <Image
            style={styles.userIcon}
            resizeMode="contain"
            source={require('../assets/icons/calendarPrimary.png')}
          />
          <Text style={styles.greeting}>{datepost}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  alignertrackcard: {
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
    padding: 16,
    alignSelf: 'stretch',
  },
  fullnamewrapper: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems:'center'
  },
  fullnamewrapperRTL: {
    flexDirection: 'row-reverse',
    alignSelf: 'stretch',
    // justifyContent:'center',
    alignItems:'center'
  },
  userIcon: {
    height: 20,
    width: 20,
    marginBottom:4,
    overflow: 'hidden',
  },
  fullnametext: {
    textAlign: 'left',
    fontSize: 18,
    color: Color.colorWhite,
    marginHorizontal: 8,
    fontFamily: 'Poppins-Regular',
  },
  alignertypewrapper: {
    alignSelf: 'stretch',
    marginTop: 8,
    flexDirection: 'row',
    alignItems:'center'

  },
  alignertypewrapperRTL: {
    alignSelf: 'stretch',
    marginTop: 8,
    flexDirection: 'row-reverse',
    alignItems:'center'

  },
  alignerpaymentwrapper: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 8,
    flexDirection: 'row',
  },

  pricewrapper: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  pricewrapperRTL: {
    flexDirection: 'row-reverse',
    alignItems: 'center',

  },
  alignertypetext: {
    color: Color.colorDarkgray,
    fontSize: 18,
    textAlign: 'left',
    marginHorizontal: 8,
    fontFamily: 'Poppins-Regular',
  },
  trackcodewrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackcodewrapperRTL: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greeting: {
    fontFamily: 'Poppins-Regular',
    color: Color.colorDarkgray,
    fontSize: 18,
    // textAlign: 'left',
    marginHorizontal: 8,
  },

  datecodewrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'

  },
  datecodewrapperRTL: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems:'center'

  },
});

export default OrderCard;
