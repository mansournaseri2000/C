import * as React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const PrimaryGhostBtnSmall = ({ buttonText = "ButtonText" , goTo, handler}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.growtextbutton}
      activeOpacity={0.8}
      onPress={() =>goTo?  navigation.navigate("DentistRegister") : handler()}
    >
      <Text style={styles.ghostbuttontext}>
        {buttonText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({

  ghostbuttontext: {
    // justifyContent: "center",
    // alignItems: "center",
    // alignSelf: "stretch",
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    color: Color.colorPrimary,
    // textAlign: "center",
    // display: "flex",
  },
  growtextbutton: {
    // justifyContent: "center",
    // alignItems: "center",
    // alignSelf: "stretch",
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: Color.colorSecondary,
    borderWidth: 1,
    // flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
});

export default PrimaryGhostBtnSmall;
