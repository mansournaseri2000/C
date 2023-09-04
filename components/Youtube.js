import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const Youtube = ({ style }) => {
  return (
    <Image
      style={[styles.youtubeIcon, style]}
      resizeMode="contain"
      source={require("../assets/icons/youtube.png")}
    />
  );
};

const styles = StyleSheet.create({
  youtubeIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
});

export default Youtube;
