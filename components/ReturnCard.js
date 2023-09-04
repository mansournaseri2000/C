import * as React from 'react';
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, FontSize} from '../GlobalStyles';

const ReturnCard = ({
  fullname = 'Fullname',
  productname = 'Aligner Kit',
  shipmethod = 'Ship Method',
  date = '10/10/2020',
  dir = 'ltr',
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.returncard}>
      <View style={dir == 'ltr' ? styles.namewrapper : styles.namewrapperRTL}>
        <Image
          style={styles.userIcon}
          resizeMode="contain"
          source={require('../assets/icons/userPrimary.png')}
        />
        <Text style={styles.name}>{fullname}</Text>
      </View>
      <View
        style={
          dir == 'ltr' ? styles.productwrapper : styles.productwrapperRTL
        }>
        <Image
          style={styles.userIcon}
          resizeMode="contain"
          source={require('../assets/icons/boxPrimary.png')}
        />
        <Text style={styles.product}>{productname}</Text>
      </View>
      <View style={styles.detailwrapper}>
        <View
          style={dir == 'ltr' ? styles.suffixwrapper : styles.suffixwrapperRTL}>
          <Image
            style={styles.userIcon}
            resizeMode="contain"
            source={require('../assets/icons/baggage-claimPrimary.png')}
          />
          <Text style={styles.shippingmethod}>{shipmethod}</Text>
        </View>
        <View
          style={dir == 'ltr' ? styles.suffixwrapper : styles.suffixwrapperRTL}>
          <Image
            style={styles.userIcon}
            resizeMode="cover"
            source={require('../assets/icons/calendarPrimary.png')}
          />
          <Text style={styles.shippingmethod}>{date}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  returncard: {
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
    padding: 16,
    // alignSelf: 'stretch',
  },
  namewrapper: {
    flexDirection: 'row',
    // alignSelf: 'stretch',
    alignItems: 'center',
  },
  namewrapperRTL: {
    flexDirection: 'row-reverse',
    // alignSelf: 'stretch',
    alignItems: 'center',
  },
  userIcon: {
    height: 24,
    width: 24,
    overflow: 'hidden',
    marginBottom: 4,
  },
  name: {
    textAlign: 'left',
    fontSize: 18,
    color: Color.colorWhite,
    marginHorizontal: 8,
    fontFamily: 'Poppins-Regular',
  },
  productwrapper: {
    // alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row',
  },
  productwrapperRTL: {
    // alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row-reverse',
  },
  product: {
    color: Color.colorDarkgray,
    fontSize: 18,
    // textAlign: 'left',
    // flex: 1,
    marginHorizontal: 8,
    fontFamily: 'Poppins-Regular',
  },

  detailwrapper: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 8,
    flexDirection: 'row',
  },
  suffixwrapper: {
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    flexBasis:'50%'
  },
  suffixwrapperRTL: {
    flexDirection: 'row-reverse',
    // justifyContent: 'center',
    alignItems: 'center',
    flexBasis:'50%'
  },
  shippingmethod: {
    color: Color.colorDarkgray,
    fontSize: 18,
    textAlign: 'left',
    marginHorizontal: 8,
    fontFamily: 'Poppins-Regular',
  },
});

export default ReturnCard;
