import * as React from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Color} from '../GlobalStyles';

const UploadPDF = ({type}) => {
  const navigation = useNavigation();
  switch (type) {
    case 'contract':
      imageSource = require('../assets/ContractImg.png');
      break;
    case 'acceptance':
      imageSource = require('../assets/AcceptanceImg.png');
      break;
    case 'termination':
      imageSource = require('../assets/TerminationImg.png');
      break;
  }
  return (
    <View style={styles.uploadsection}>
      <View style={styles.pdfcontainer}>
        <Image
          style={styles.contractimageIcon}
          resizeMode="contain"
          source={imageSource}
        />
        <TouchableOpacity 
        style={styles.circleiconbutton}
        activeOpacity={0.8}
        >
          <Image
            style={styles.packagePlusIcon}
            resizeMode="contain"
            source={require('../assets/icons/paperclipPrimary.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contractimageIcon: {
    width: 250,
    height: 375,
  },
  circleiconbutton: {
    backgroundColor: Color.colorSecondary,
    paddingHorizontal: 8,
    marginTop: 8,
    flexDirection: 'row',
    height: 40,
    width: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pdfcontainer: {
    padding: 16,
    alignItems: 'center',
    flex: 1,
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
  },
  uploadsection: {
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 0,
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingVertical: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default UploadPDF;
