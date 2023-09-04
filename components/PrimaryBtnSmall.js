import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const PrimaryBtnSmall = ({ buttonText = "button", goTo, handler}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[styles.growtextbutton, styles.growtextbuttonFlexBox]}
      activeOpacity={0.8}
      onPress={() =>goTo?  navigation.navigate("DentistRegister") : handler()}
    >
      <Text style={styles.buttontext}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttontext: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: Color.gray,
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  growtextbutton: {
    borderRadius: 15,
    backgroundColor: Color.colorPrimary,
    flexDirection: "row",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default PrimaryBtnSmall;
