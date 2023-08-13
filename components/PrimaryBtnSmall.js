import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const PrimaryBtnSmall = ({ buttonText = "button" }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.growtextbutton, styles.buttontextFlexBox]}
      onPress={() => navigation.navigate("OnboardingTwo")}
    >
      <Text style={[styles.buttontext, styles.buttontextFlexBox]}>
        {buttonText}
      </Text>
    </Pressable>
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
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorPrimary,
    width: 137,
    flexDirection: "row",
    padding: Padding.p_5xs,
  },
});

export default PrimaryBtnSmall;
