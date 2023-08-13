import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const YoutubeIcon = ({ style }) => {
  return (
    <Image
      style={[styles.youtubeIcon, style]}
      resizeMode="contain"
      source={require("../assets/youtube.png")}
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

export default YoutubeIcon;
