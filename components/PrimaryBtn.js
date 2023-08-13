import * as React from "react";
import { Pressable, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const PrimaryBtn = ({ buttonText = "Text Button" }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.growtextbutton, styles.buttontextFlexBox]}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("CaseRegister")}
    >
      <Text style={[styles.buttontext, styles.buttontextFlexBox]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttontextFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    fontSize: FontSize.titleMedium_size,
    fontFamily: FontFamily.bodySmall,
    color: Color.gray,
    textAlign: "center",
    display: "flex",
    width: 304,
    height: 28,
  },
  growtextbutton: {
    alignSelf: "stretch",
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorPrimary,
    height: 40,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default PrimaryBtn;
