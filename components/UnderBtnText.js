import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Padding } from "../GlobalStyles";

const UnderBtnText = ({
  inofText = "Information for change page",
  pageName = "PageTitle",
  goTo 
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.underbtntext}>
      <Text style={styles.inoftext}>{inofText}</Text>
      <TouchableOpacity
        style={styles.actiontext}
        activeOpacity={0.8}
        onPress={() => navigation.navigate(goTo)}
      >
        <Text style={styles.login}>{pageName}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inoftext: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  login: {
    color: Color.colorPrimary,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  actiontext: {
    marginLeft: 8,
  },
  underbtntext: {
    alignSelf: "stretch",
    flexDirection: "row",
    // paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
});

export default UnderBtnText;
