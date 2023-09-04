import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color, FontSize} from '../GlobalStyles';

const PaymentCancel = ({productname , price, tax, dir="ltr"}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentcontainer}>
      <View style={styles.paymentrecipt}>
        <View style={styles.frameParent}>
          <Text style={styles.cancel}>Cancel</Text>
          <Text style={styles.modelingKit}>{productname}</Text>
          <View style={styles.price}>
            <Text style={dir == 'ltr' ? styles.pricetext : styles.picetextRTL}>€ {price}</Text>
            <Text style={dir == 'ltr' ? styles.taxtext : styles.taxtextRTL}>Tax: {tax}%</Text>
          </View>
        </View>
        <View style={styles.thankWrapper}>
          <Text style={dir == 'ltr' ? styles.thanktext : styles.thanktextRTL}>
            Thank you so much for choosing us and placing your recent order. We
            greatly appreciate you trust in our products.
          </Text>
        </View>
        <Image
          style={styles.boxClosedCopy}
          resizeMode="contain"
          source={require('../assets/ProductNewImg.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentcontainer: {
    paddingTop: 96,
    alignItems: 'center',
    paddingHorizontal: 16,
    alignSelf: 'stretch',
  },
  paymentrecipt: {
    paddingVertical: 64,
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
    paddingHorizontal: 16,
    alignSelf: 'stretch',
  },
  frameParent: {
    zIndex: 0,
    alignSelf: 'stretch',
  },
  boxClosedCopy: {
    position: 'absolute',
    top: -99,
    right: 0,
    width: 180,
    height: 180,
    zIndex: 2,
  },
  cancel: {
    fontSize: 28,
    color: Color.colorDanger,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
  modelingKit: {
    fontSize: 24,
    color: Color.colorDarkgray,
    textAlign: 'center',
  },
  price: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    marginTop: 8,
    flexDirection: 'row',
  },
  pricetext: {
    fontSize: 28,
    color: Color.colorPrimary,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  picetextRTL:{
    fontSize: 28,
    color: Color.colorPrimary,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  taxtext: {
    fontSize: 28,
    color: Color.colorPrimary,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  taxtextRTL:{
    fontSize: 28,
    color: Color.colorPrimary,
    fontFamily: 'Poppins-Regular',
  },
  thankWrapper: {
    zIndex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row',
  },
  thanktext: {
    fontSize: 18,
    color: Color.colorWhite,
    textAlign: 'left',
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  thanktextRTL:{
    fontSize: 18,
    color: Color.colorWhite,
    textAlign: 'right',
    flex: 1,
    fontFamily: 'Poppins-Regular',
  }
});

export default PaymentCancel;
