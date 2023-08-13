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
          source={require("../assets/image3.png")}
        />
      </View>
      <Text style={styles.alignernumber}>#1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageIcon: {
    borderRadius: Border.br_11xs,
    width: 150,
    height: 100,
  },
  imagewrapper: {
    borderRadius: Border.br_8xs,
    borderStyle: "solid",
    borderColor: "#c5ab8e",
    borderWidth: 2,
    padding: Padding.p_9xs,
  },
  alignernumber: {
    fontSize: FontSize.titleMedium_size,
    fontFamily: FontFamily.bodySmall,
    color: Color.colorPrimary,
    textAlign: "left",
    marginTop: 8,
  },
  imagecontainer: {
    alignItems: "center",
  },
});

export default ImageContainer;
