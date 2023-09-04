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

const TrackerCard = () => {
  const [sliderFlatListData, setSliderFlatListData] = useState([
    <ImageContainer />,
    <FrameComponent />,
    <FrameComponent1 />,
    <FrameComponent2 />,
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.trackalignercontainer}>
      <View style={styles.counterwrapper}>
        <View style={styles.titlewrapper}>
          <Text style={styles.titletext1}>Wearing</Text>
        </View>
        <View style={styles.titlewrapper}>
          <Text style={styles.labeltext}>ALIGNER</Text>
        </View>
        <View style={styles.counternumber}>
          <Text style={styles.number}>1</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  trackalignercontainer: {
    marginTop: 32,
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  counterwrapper: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Color.colorPrimary,
    borderStyle: 'solid',
    alignItems: 'center',
  },
  titlewrapper: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  titletext1: {
    color: Color.colorPrimary,
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  labeltext: {
    color: Color.colorPrimary,
    fontSize: 24,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },
  counternumber: {
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  number: {
    fontSize: 34,
    color: Color.colorPrimary,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
  },

});

export default TrackerCard;
