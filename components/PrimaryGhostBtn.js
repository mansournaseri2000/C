import * as React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const PrimaryGhostBtn = ({ buttonText = "ButtonText" , goTo, handler}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.growtextbutton, styles.growtextbuttonFlexBox]}
      activeOpacity={0.8}
      onPress={() =>goTo?  navigation.navigate("DentistRegister") : handler()}
    >
      <Text style={[styles.ghostbuttontext, styles.growtextbuttonFlexBox]}>
        {buttonText}
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
    fontSize: 18,
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
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default PrimaryGhostBtn;
