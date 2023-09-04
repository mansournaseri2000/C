import React, { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar
} from "react-native";
import ImageContainer from "../components/ImageContainer";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const SecondaryDateCard = () => {
  const [sliderFlatListData, setSliderFlatListData] = useState([
    <ImageContainer />,
    <FrameComponent />,
    <FrameComponent1 />,
    <FrameComponent2 />,
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.datacard1}>
    <View style={styles.titlewrapper}>
      <Text style={styles.titletext}>
        End date
      </Text>
    </View>
    <View style={styles.titlewrapper}>
      <Text style={styles.date}>
        29/06/2023
      </Text>
    </View>
  </View>      
    
  );
};

const styles = StyleSheet.create({
  datacard1: {
    backgroundColor: Color.bgBrown,
    paddingVertical: 4,
    paddingHorizontal: Padding.p_xs,
    borderRadius: 12,
    alignItems: "center",
  },
  titlewrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  titletext: {
    color: Color.colorPrimary,
    fontSize: 22,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
  },
  date: {
    color: Color.colorLightgray,
    fontSize: 18,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
  },

});

export default SecondaryDateCard;
