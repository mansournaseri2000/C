import * as React from "react";
import { Pressable, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const TextButton = ({ skipText = "TextButton" }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.skipwrapper}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("Home")}
    >
      <Text style={styles.skiptext}>{skipText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skiptext: {
    fontSize: FontSize.titleMedium_size,
    fontFamily: FontFamily.bodySmall,
    color: Color.colorDarkgray,
    textAlign: "center",
  },
  skipwrapper: {
    flexDirection: "row",
    padding: Padding.p_3xs,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TextButton;
