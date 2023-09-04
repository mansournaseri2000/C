import * as React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const SecondaryBtnSmall = ({ buttonText = "button", goTo, handler, activeOpacity=0.8}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
    style={[styles.growtextbutton, styles.buttontextFlexBox]}
    activeOpacity={activeOpacity}
    onPress={() => goTo ? navigation.navigate(goTo) : handler()}
  >
      <Text style={[styles.buttontext, styles.buttontextFlexBox]}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  buttontext: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
    color: Color.colorPrimary,
    textAlign: "center",
    display: "flex",
  },
  growtextbutton: {
    borderRadius: 15,
    backgroundColor: Color.colorSecondary,
    flexDirection: "row",
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    },
});

export default SecondaryBtnSmall;
