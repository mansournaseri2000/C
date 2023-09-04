import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const TitleSection = ({ title = "Hero title" }) => {
  return (
    <View style={styles.titlesection}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    flex: 1,
    fontSize: 20,
    fontFamily: "Poppins-Regular",
    color: Color.colorPrimary,
    textAlign: "center",
  },
  titlesection: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default TitleSection;
