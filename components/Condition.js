import * as React from "react";
import { StyleProp, ViewStyle, Image, StyleSheet } from "react-native";

const Condition = ({ style }) => {
  return (
    <Image
      style={[styles.conditionIcon, style]}
      resizeMode="contain"
      source={require("../assets/icons/condition.png")}
    />
  );
};

const styles = StyleSheet.create({
  conditionIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
});

export default Condition;
