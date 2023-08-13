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
  login = "PageTitle",
}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.underbtntext}>
      <Text style={[styles.inoftext, styles.loginTypo]}>{inofText}</Text>
      <TouchableOpacity
        style={styles.actiontext}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DentistLogin")}
      >
        <Text style={[styles.login, styles.loginTypo]}>{login}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  loginTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  inoftext: {
    color: Color.colorWhite,
  },
  login: {
    color: Color.colorPrimary,
  },
  actiontext: {
    marginLeft: 8,
  },
  underbtntext: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
});

export default UnderBtnText;
