import * as React from "react";
import { Pressable, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const GhostBtn = ({ ghostButtonText = "ButtonText" }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.growtextbutton, styles.growtextbuttonFlexBox]}
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DentistRegister")}
    >
      <Text style={[styles.ghostbuttontext, styles.growtextbuttonFlexBox]}>
        {ghostButtonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  growtextbuttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  ghostbuttontext: {
    fontSize: FontSize.titleMedium_size,
    fontFamily: FontFamily.bodySmall,
    color: Color.colorPrimary,
    textAlign: "center",
    display: "flex",
    width: 304,
  },
  growtextbutton: {
    borderRadius: Border.br_mini,
    borderStyle: "solid",
    borderColor: "#c5ab8e",
    borderWidth: 1,
    height: 40,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
  },
});

export default GhostBtn;
