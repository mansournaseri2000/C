import React, {useState} from 'react';
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import ImageContainer from '../components/ImageContainer';
import FrameComponent from '../components/FrameComponent';
import FrameComponent1 from '../components/FrameComponent1';
import FrameComponent2 from '../components/FrameComponent2';
import {useNavigation} from '@react-navigation/native';
import {Padding, Border, FontFamily, FontSize, Color} from '../GlobalStyles';

const IconTitle = () => {
  const [sliderFlatListData, setSliderFlatListData] = useState([
    <ImageContainer />,
    <FrameComponent />,
    <FrameComponent1 />,
    <FrameComponent2 />,
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.titlewrapper}>
      <Image
        style={styles.calendarIcon}
        resizeMode="contain"
        source={require('../assets/icons/calendarPrimary.png')}
      />
      <View style={styles.titletextwrapper}>
        <Text
          style={styles.titletext}>{` 14 more days on ALigner #1 `}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titlewrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  calendarIcon: {
    overflow: 'hidden',
    width: 32,
    height: 32,
  },
  titletextwrapper: {
    marginLeft: 9,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  titletext: {
    color: Color.colorPrimary,
    fontSize: 22,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
});

export default IconTitle;
