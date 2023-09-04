import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';

const UploadImage = ({page = 1}) => {
  const navigation = useNavigation();
  switch (page) {
    case 1:
      imageSource = require('../assets/Page1Img.png');
      break;
    case 2:
      imageSource = require('../assets/Page2Img.png');
      break;
    case 3:
      imageSource = require('../assets/Page3Img.png');
      break;
    case 4:
      imageSource = require('../assets/Page4Img.png');
      break;
    default:
      imageSource = require('../assets/Page1Img.png');
      break;
  }
  return (
      <View style={styles.pageWrapper}>
        <Image
          style={styles.pageimage}
          resizeMode="contain"
          source={imageSource}
        />
        <View style={styles.uploadwrapper}>
          <View style={styles.gallerybtn}>
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={require('../assets/icons/imagePrimary.png')}
            />
          </View>
          <View style={styles.camerabtn}>
            <Image
              style={styles.icon}
              resizeMode="contain"
              source={require('../assets/icons/cameraPrimary.png')}
            />
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({

  pageWrapper: {
    paddingVertical: 16,
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
    overflow: 'hidden',
    // marginLeft: 16,
    // paddingHorizontal: 8,
    alignItems: 'center',
  },

  pageimage: {
    height: 150,
  },

  uploadwrapper: {
    height: 40,
    alignSelf: 'stretch',
    marginTop: 8,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },

  gallerybtn: {
    padding: 8,
    alignItems: 'center',
    // paddingVertical: 40,
    backgroundColor: Color.colorSecondary,
    borderRadius: 100,
    justifyContent: 'center',
    height: 40,
    width: 40,
    flexDirection: 'row',
  },
  camerabtn: {
    // paddingVertical: 40,
    backgroundColor: Color.colorSecondary,
    borderRadius: 100,
    justifyContent: 'center',
    height: 40,
    width: 40,
    flexDirection: 'row',
    marginLeft: 16,
    padding: 8,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
    overflow: 'hidden',
  },
});

export default UploadImage;
