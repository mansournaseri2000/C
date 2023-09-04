import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Border, Padding, FontSize, FontFamily, Color } from "../GlobalStyles";

const FrameComponent2 = ({ style }) => {
  return (
    <View style={[styles.frameParent, style]}>
      <View style={styles.teethWhiteningAfterTreatmenWrapper}>
        <Image
          style={styles.teethWhiteningAfterTreatmenIcon}
          resizeMode="cover"
          source={require("../assets/SmileImg.png")}
        />
      </View>
      <Text style={styles.text}>#3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  teethWhiteningAfterTreatmenIcon: {
    borderRadius: 2,
    width: 150,
    height: 100,
  },
  teethWhiteningAfterTreatmenWrapper: {
    borderRadius: 5,
    borderStyle: "solid",
    borderColor: Color.colorPrimary,
    borderWidth: 2,
    padding: 4,
  },
  text: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    color: Color.colorPrimary,
    textAlign: "left",
    marginTop: 8,
  },
  frameParent: {
    alignItems: "center",
  },
});

export default FrameComponent2;
