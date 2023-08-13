import * as React from "react";
import { Pressable, Text, StyleSheet, View, Image } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

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
        source={require("../assets/group-11.png")}
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
    fontSize: FontSize.titleMedium_size,
    fontFamily: FontFamily.bodySmall,
    color: Color.gray,
    textAlign: "center",
  },
  growtextbutton: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorPrimary,
    width: 40,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    height: 40,
  },
  headertext: {
    fontSize: FontSize.headingMediumBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.headingMediumBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  header1: {
    height: 30,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
  },
  headerChild: {
    width: 50,
    height: 40,
  },
  header: {
    alignSelf: "stretch",
    padding: Padding.p_base,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default HeaderLan;
