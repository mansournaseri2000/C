import * as React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Pressable,
  Text,
  TouchableOpacity,
  StatusBar
} from "react-native";
import TitleSection from "../components/TitleSection";
import IndicatorSection from "../components/IndicatorSection";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const OnboardingTwo = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboardingtwo, styles.btnsectionFlexBox1]}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={[styles.imagesection, styles.imagesectionFlexBox]}>
        <View style={[styles.imagesection1, styles.imagesectionFlexBox]}>
          <ImageBackground
            style={styles.dimageIcon}
            resizeMode="cover"
            source={require("../assets/3dimage.png")}
          />
        </View>
      </View>
      <TitleSection title="Aesthetic 3D simulation plan for your teeth correction" />
      <IndicatorSection enabledIndicator={2}/>

      <Pressable style={[styles.btnsection, styles.btnsectionFlexBox]}>
        <TouchableOpacity
          style={[styles.skipwrapper, styles.imagesectionFlexBox]}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.skiptext, styles.skiptextTypo]}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.growtextbutton, styles.imagesectionFlexBox]}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("OnboardingThree")}
        >
          <Text style={[styles.buttontext, styles.skiptextTypo]}>Next</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  btnsectionFlexBox1: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagesectionFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  btnsectionFlexBox: {
    paddingHorizontal: Padding.p_13xl,
    alignSelf: "stretch",
    flexDirection: "row",
  },
  skiptextTypo: {
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  dimageIcon: {
    width: 241,
    height: 148,
  },
  imagesection1: {
    width: 390,
    height: 400,
    flexDirection: "row",
    justifyContent: "center",
  },
  imagesection: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_13xl,
    alignSelf: "stretch",
    flexDirection: "row",
    flex: 1,
  },
  skiptext: {
    color: Color.colorDarkgray,
  },
  skipwrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttontext: {
    color: Color.gray,
    display: "flex",
    width: 304,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  growtextbutton: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorPrimary,
    width: 137,
    padding: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
  },
  btnsection: {
    paddingVertical: Padding.p_base,
    justifyContent: "space-between",
    alignItems: "center",
  },
  onboardingtwo: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 844,
    flex: 1,
  },
});

export default OnboardingTwo;
