import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  ImageBackground,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Border, Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const ImageContainer = ({ style }) => {
  return (
    <View style={[styles.imagecontainer, style]}>
      <View style={styles.imagewrapper}>
        <ImageBackground
          style={styles.imageIcon}
          resizeMode="contain"
          source={require("../assets/SmileImg.png")}
        />
      </View>
      <Text style={styles.alignernumber}>#1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageIcon: {
    borderRadius: 2,
    width: 150,
    height: 100,
  },
  imagewrapper: {
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: Color.colorPrimary,
    borderWidth: 2,
    padding: 4,
  },
  alignernumber: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    color: Color.colorPrimary,
    textAlign: "left",
    marginTop: 8,
  },
  imagecontainer: {
    alignItems: "center",
  },
});

export default ImageContainer;
