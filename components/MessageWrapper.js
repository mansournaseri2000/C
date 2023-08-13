import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const MessageWrapperIcon = ({ style }) => {
  return (
    <Image
      style={[styles.messagewrapperIcon, style]}
      resizeMode="contain"
      source={require("../assets/messagewrapper.png")}
    />
  );
};

const styles = StyleSheet.create({
  messagewrapperIcon: {
    width: 32,
    height: 32,
  },
});

export default MessageWrapperIcon;
