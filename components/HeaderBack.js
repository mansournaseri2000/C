import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const HeaderBack = ({ headerText = "Header" }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.header}>
      <Pressable
        style={[styles.iconbutton, styles.header1FlexBox]}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.arrowLeftIcon}
          resizeMode="contain"
          source={require("../assets/icons/arrow-left.png")}
        />
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
  arrowLeftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconbutton: {
    borderRadius: 15,
    backgroundColor: Color.colorPrimary,
    width: 40,
    padding: 8,
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
    paddingHorizontal: 10,
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

export default HeaderBack;
