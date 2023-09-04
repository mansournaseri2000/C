import * as React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';
const ShopCard = ({product, type, price, dir}) => {
  const navigation = useNavigation();

  return (
      <View style={styles.shopcardwrapper}>
        <View style={styles.shopinfowrapper}>
          <View style={dir == 'ltr' ? styles.productnamewrapper : styles.productnamewrapperRTL}>
            <Text style={styles.productnametext}>{product}</Text>
          </View>
          <View style={dir == 'ltr' ? styles.productmodelwrapper : styles.productmodelwrapperRTL}>
            <Text style={styles.productmodeltext}>{type}</Text>
          </View>
          <View style={styles.productpricewrapper}>
            <Text style={dir == 'ltr' ? styles.productpricetext : styles.productpricetextRTL}>€ {price}</Text>
          </View>
          <Image
            style={dir == 'ltr' ? styles.productimageIcon : styles.productimageIconRTL}
            resizeMode="contain"
            // source={require('../assets/ProductImg.png')}
            source={require('../assets/ProductNewImg.png')}
          />
        </View>
        <TouchableOpacity style={styles.shrinkbutton} activeOpacity={0.8}>
          <View style={styles.buttonwrapper}>
            <Image
              style={styles.packagePlusIcon}
              resizeMode="contain"
              source={require('../assets/icons/package-plus.png')}
            />
            <Text style={styles.buttontext1}>Buy now</Text>
          </View>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  shopcardwrapper: {
    // flex: 1,
    margin: 64,
    width: 200,
  },
  shopinfowrapper: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
    paddingTop: 64,
    alignSelf: 'stretch',
  },
  productnamewrapper: {
    // padding: 4,
    // zIndex: 0,
    // justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  productnamewrapperRTL: {
    // padding: 4,
    // zIndex: 0,
    // justifyContent: 'center',
    flexDirection: 'row-reverse',
    alignSelf: 'stretch',
  },
  productnametext: {
    fontSize: 20,
    // width: 148,
    color: Color.colorDarkgray,
    // textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  productmodelwrapper: {
    zIndex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row',
  },
  productmodelwrapperRTL: {
    zIndex: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row-reverse',
  },
  productmodeltext: {
    textAlign: 'left',
    color: Color.colorPrimary,
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
  },
  productpricewrapper: {
    marginTop: 8,
  },
  productpricetext: {
    textAlign: 'right',
    color: Color.colorPrimary,
    fontFamily: 'Poppins-Regular',
    fontSize: 28,
  },
  productpricetextRTL: {
    textAlign: 'left',
    color: Color.colorPrimary,
    fontFamily: 'Poppins-Regular',
    fontSize: 28,
  },
  productimageIcon: {
    position: 'absolute',
    marginLeft: -63.5,
    top: -72,
    right: 0,
    width: 128,
    height: 128,
    zIndex: 3,
  },
  productimageIconRTL: {
    position: 'absolute',
    marginLeft: -63.5,
    top: -72,
    left: 64,
    width: 128,
    height: 128,
    zIndex: 3,
  },
  shrinkbutton: {
    backgroundColor: Color.colorPrimary,
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 40,
    borderRadius: 15,
    marginTop: 8,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginTop: 8,
    flexDirection: 'row',
  },
  buttonwrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  packagePlusIcon: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
  buttontext1: {
    marginLeft: 8,
    textAlign: 'center',
    color: Color.gray,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
});

export default ShopCard;
