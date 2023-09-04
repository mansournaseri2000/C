import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const Info = ({ style }) => {
  return (
    <Image
      style={[styles.infoIcon, style]}
      resizeMode="contain"
      source={require("../assets/icons/info.png")}
    />
  );
};

const styles = StyleSheet.create({
  infoIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
});

export default Info;
