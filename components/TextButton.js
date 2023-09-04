import * as React from "react";
import { Pressable, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const TextButton = ({ skipText = "TextButton", goTo, type}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.skipwrapper}
      activeOpacity={0.8}
      onPress={() => navigation.navigate(goTo)}
    >
      <Text style={[styles.skiptext,{color: type=="primary" ? Color.colorPrimary : Color.colorDarkgray}]}>{skipText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skiptext: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    color: Color.colorDarkgray,
    textAlign: "center",
  },
  skipwrapper: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TextButton;
