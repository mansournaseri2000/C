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

const PrimaryDateCard = () => {
  const [sliderFlatListData, setSliderFlatListData] = useState([
    <ImageContainer />,
    <FrameComponent />,
    <FrameComponent1 />,
    <FrameComponent2 />,
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.datacard}>
      <View style={styles.titlewrapper}>
        <Text style={styles.label}>Start date</Text>
      </View>
      <View style={styles.titlewrapper}>
        <Text style={styles.date}>29/06/2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  datacard: {
    backgroundColor: Color.colorPrimary,
    paddingVertical: 4,
    paddingHorizontal: Padding.p_xs,
    borderRadius: 12,
    alignItems: 'center',
  },
  titlewrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  label: {
    fontSize: 22,
    color: Color.gray,
  },
  date: {
    color: Color.colorLightgray,
    fontSize: 18,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
  },
});

export default PrimaryDateCard;
