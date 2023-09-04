import * as React from "react";
import { Pressable, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const SecondaryGhostBtn = ({ ghostButtonText = "ButtonText" , goTo, handler}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.growtextbutton, styles.growtextbuttonFlexBox]}
      activeOpacity={0.8}
      onPress={() =>goTo?  navigation.navigate("DentistRegister") : handler()}
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
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: Color.colorPrimary,
    textAlign: "center",
    display: "flex",
  },
  growtextbutton: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: Color.colorPrimary,
    borderWidth: 1,
    flexDirection: "row",
    // paddingHorizontal: 16,
    // paddingVertical: 8,
  },
});

export default SecondaryGhostBtn;
