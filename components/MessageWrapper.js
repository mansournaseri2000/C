import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const MessageWrapper = ({ style }) => {
  return (
    <Image
      style={[styles.messagewrapperIcon, style]}
      resizeMode="contain"
      source={require("../assets/icons/message-circle.png")}
    />
  );
};

const styles = StyleSheet.create({
  messagewrapperIcon: {
    width: 32,
    height: 32,
  },
});

export default MessageWrapper;
