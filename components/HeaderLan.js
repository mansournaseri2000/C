import * as React from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { Color } from "../GlobalStyles";

const HeaderLan = ({ headerText = "Header" }) => {
  return (
    <View style={styles.header}>
      <Pressable style={[styles.growtextbutton, styles.header1FlexBox]}>
        <Text style={styles.buttontext}>EN</Text>
      </Pressable>
      <View style={[styles.header1, styles.header1FlexBox]}>
        <Text style={styles.headertext}>{headerText}</Text>
      </View>
      <Image
        style={styles.headerChild}
        resizeMode="contain"
        source={require("../assets/JplignLogo.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  header1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttontext: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    color: Color.gray,
    textAlign: "center",
  },
  growtextbutton: {
    borderRadius: 15,
    backgroundColor: Color.colorPrimary,
    width: 40,
    paddingVertical: 8,
    height: 40,
  },
  headertext: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    color: Color.colorWhite,
    textAlign: "center",
  },
  header1: {
    height: 30,
    paddingVertical: 0,
  },
  headerChild: {
    width: 50,
    height: 40,
  },
  header: {
    alignSelf: "stretch",
    paddingVertical: 16,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default HeaderLan;
