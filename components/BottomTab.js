import * as React from 'react';
import {Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Color} from '../GlobalStyles';
import {useNavigation} from '@react-navigation/native';

const BottomTab = ({activePage}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.bottomtab}>
      <TouchableOpacity
        style={styles.tabWrapper}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Chat')}>
        <Image
          style={styles.iconLayout}
          resizeMode="contain"
          source={
            activePage == 1
              ? require('../assets/icons/message-circleWhite.png')
              : require('../assets/icons/message-circlePrimary.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabWrapper}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Videos')}>
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={
            activePage == 2
              ? require('../assets/icons/youtubeWhite.png')
              : require('../assets/icons/youtubePrimary.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabWrapper}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Conditions')}>
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={
            activePage == 3
              ? require('../assets/icons/infoWhite.png')
              : require('../assets/icons/infoPrimary.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabWrapper}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('FAQs')}>
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={
            activePage == 4
              ? require('../assets/icons/conditionWhite.png')
              : require('../assets/icons/conditionPrimary.png')
          }
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.tabWrapper}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Chat')}>
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={
            activePage == 5
              ? require('../assets/icons/log-outWhite.png')
              : require('../assets/icons/log-outPrimary.png')
          }
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabWrapper: {
    backgroundColor: Color.bgBrown,
    // padding: 16,
    padding: 8,
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  youtubeIcon: {
    overflow: 'hidden',
  },
  bottomtab: {
    alignSelf: 'stretch',
    backgroundColor: Color.bgBrown,
    borderStyle: 'solid',
    borderColor: '#000',
    borderTopWidth: 5,
    flexDirection: 'row',
    paddingHorizontal: 16,
    justifyContent: 'space-between',
  },
});

export default BottomTab;
