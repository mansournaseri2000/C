import * as React from "react";
import {
  View,
  Image,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Padding, Color, Border } from "../GlobalStyles";
import IndicatorSection from "../components/IndicatorSection";
const OnboardingThree = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.onboardingthree, styles.onboardingthreeFlexBox]}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={[styles.imagesection, styles.imagesectionFlexBox]}>
        <View style={[styles.imagesection1, styles.imagesectionFlexBox]}>
          <Image
            style={styles.jplignlogoIcon}
            resizeMode="cover"
            source={require("../assets/jplignlogo3.png")}
          />
        </View>
      </View>
      <View style={[styles.titlesection, styles.imagesectionFlexBox]}>
        <Text style={styles.title}>
          Guiding you towards a radiant smile and confident appearance
        </Text>
      </View>
      <IndicatorSection enabledIndicator={3}/>
      <Pressable style={styles.btnsection}>
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
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={[styles.buttontext, styles.skiptextTypo]}>Next</Text>
        </TouchableOpacity>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  onboardingthreeFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagesectionFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  skiptextTypo: {
    fontSize: FontSize.titleMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
  },
  jplignlogoIcon: {
    width: 210,
    height: 166,
  },
  imagesection1: {
    width: 390,
    height: 400,
    flexDirection: "row",
  },
  imagesection: {
    paddingVertical: 0,
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    flexDirection: "row",
    alignSelf: "stretch",
    flex: 1,
  },
  title: {
    fontSize: FontSize.titleLarge_size,
    color: Color.colorPrimary,
    height: 66,
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
    flex: 1,
  },
  titlesection: {
    paddingVertical: 0,
    justifyContent: "center",
    paddingHorizontal: Padding.p_13xl,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  indicator1Icon: {
    width: 24,
    height: 24,
  },
  indicatorwrapper: {
    width: 104,
    flexDirection: "row",
  },
  indicatorsection: {
    height: 68,
    paddingHorizontal: 0,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
  },
  skiptext: {
    color: Color.colorDarkgray,
  },
  skipwrapper: {
    padding: Padding.p_3xs,
    flexDirection: "row",
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
  },
  btnsection: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_13xl,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  onboardingthree: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 844,
    flex: 1,
  },
});

export default OnboardingThree;
