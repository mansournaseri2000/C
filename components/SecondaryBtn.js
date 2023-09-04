import * as React from "react";
import { Pressable, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SecondaryBtn = ({ buttonText = "Text Button", goTo, handler }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.growtextbutton, styles.buttontextFlexBox]}
      activeOpacity={0.8}
      onPress={() => goTo ? navigation.navigate(goTo) : handler()}
    >
      <Text style={[styles.buttontext, styles.buttontextFlexBox]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  growtextbutton: {
    alignSelf: "stretch",
    borderRadius: 15,
    backgroundColor: Color.colorSecondary,
    flexDirection: "row",
    paddingVertical: 8,
  },
  buttontextFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    color: Color.colorPrimary,
  },
 
});

export default SecondaryBtn;
