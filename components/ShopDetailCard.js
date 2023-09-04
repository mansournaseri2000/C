import * as React from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Padding, Color} from '../GlobalStyles';

const ShopDetailCard = ({producttype, productname, price, dir}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.shopdetailcontainer}>
      <View style={styles.shopdetailcard}>
        <View style={styles.detailtopwrapper}>
          <View style={styles.producttypewrapper}>
            <Text style={dir == 'ltr' ? styles.producttypetext : styles.producttypetextRTL}>{producttype}</Text>
          </View>
          <View style={styles.productmodelwrapper}>
            <Text style={dir == 'ltr' ? styles.productmodeltext : styles.productmodeltextRTL}>{productname}</Text>
          </View>
          <View style={styles.productmodelwrapper}>
            <Text style={dir == 'ltr' ? styles.productprice : styles.productpriceRTL}>€ {price}</Text>
          </View>
        </View>
        <View style={styles.detailmiddlewrapper}>
          <Text
            style={
              dir == 'ltr' ? styles.middletext : styles.middletextRTL
            }>{`Start your tooth correction easily and without any problems!
`}</Text>
        </View>
        <Text
          style={dir == 'ltr' ? styles.detailtext : styles.detailtextRTL}>{`• Price-performance ratio all-round service
• Fast and easy application
• Save time with online support
• Interest-free installment payment
• Result guarantee aligners
• 22 years of experience
`}</Text>
        <Image
          style={dir == 'ltr' ? styles.productimageIcon : styles.productimageIconRTL}
          resizeMode="contain"
          source={require('../assets/ProductNewImg.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  shopdetailcontainer: {
    paddingTop: 128,
    paddingHorizontal: 16,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  shopdetailcard: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    alignSelf: 'stretch',
  },
  detailtopwrapper: {
    zIndex: 0,
    alignSelf: 'stretch',
  },
  producttypewrapper: {
    flexDirection: 'row-reverse',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  producttypetext: {
    fontSize: 30,
    textAlign: 'left',
    flex: 1,
    color: Color.colorPrimary,
    fontFamily: 'Poppins-Regular',
  },
  producttypetextRTL: {
    fontSize: 30,
    textAlign: 'right',
    flex: 1,
    color: Color.colorPrimary,
    fontFamily: 'Poppins-Regular',
  },
  productmodelwrapper: {
    alignSelf: 'stretch',
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productmodeltext: {
    fontSize: 24,
    flex: 1,
    color: Color.colorDarkgray,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  productmodeltextRTL: {
    fontSize: 24,
    flex: 1,
    color: Color.colorDarkgray,
    textAlign: 'right',
    fontFamily: 'Poppins-Regular',
  },
  productprice: {
    fontSize: 28,
    textAlign: 'right',
    flex: 1,
    color: Color.colorPrimary,
    fontFamily: 'Poppins-Regular',
  },
  productpriceRTL: {
    fontSize: 28,
    textAlign: 'left',
    flex: 1,
    color: Color.colorPrimary,
    fontFamily: 'Poppins-Regular',
  },
  detailmiddlewrapper: {
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    alignSelf: 'stretch',
  },
  middletext: {
    height: 46,
    fontSize: 18,
    textAlign: 'left',
    color: Color.colorWhite,
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  middletextRTL: {
    height: 46,
    fontSize: 18,
    textAlign: 'right',
    color: Color.colorWhite,
    flex: 1,
    fontFamily: 'Poppins-Regular',
  },
  detailtext: {
    lineHeight: 26,
    zIndex: 2,
    color: Color.colorPrimary,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'left',
    marginTop: 16,
    alignSelf: 'stretch',
    paddingHorizontal: 4,
  },
  detailtextRTL: {
    lineHeight: 26,
    zIndex: 2,
    color: Color.colorPrimary,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    textAlign: 'right',
    marginTop: 16,
    alignSelf: 'stretch',
    paddingHorizontal: 4,
  },

  productimageIcon: {
    position: 'absolute',
    top: -99,
    right: 0,
    width: 158,
    height: 148,
    zIndex: 3,
  },
  productimageIconRTL: {
    position: 'absolute',
    top: -99,
    left: 0,
    width: 158,
    height: 148,
    zIndex: 3,
  },
});

export default ShopDetailCard;
