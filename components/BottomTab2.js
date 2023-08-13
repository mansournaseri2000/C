import * as React from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Color, Padding } from "../GlobalStyles";

const BottomTab = ({ messageWrapper, youtube, info, condition, logOut }) => {
  return (
    <View style={styles.bottomtab}>
      <Image
        style={styles.iconLayout}
        resizeMode="contain"
        source={messageWrapper}
      />
      <Image
        style={[styles.youtubeIcon, styles.iconLayout]}
        resizeMode="contain"
        source={youtube}
      />
      <Image
        style={[styles.youtubeIcon, styles.iconLayout]}
        resizeMode="contain"
        source={info}
      />
      <Image
        style={[styles.youtubeIcon, styles.iconLayout]}
        resizeMode="contain"
        source={condition}
      />
      <Image
        style={[styles.youtubeIcon, styles.iconLayout]}
        resizeMode="contain"
        source={logOut}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 32,
    width: 32,
  },
  youtubeIcon: {
    overflow: "hidden",
  },
  bottomtab: {
    alignSelf: "stretch",
    backgroundColor: Color.bgBrown,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 5,
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    justifyContent: "space-between",
  },
});

export default BottomTab;
