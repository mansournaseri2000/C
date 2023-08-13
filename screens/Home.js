import * as React from "react";
import { Pressable, Text, StyleSheet, View, StatusBar} from "react-native";
import HeroSection from "../components/HeroSection";
import PrimaryBtn from "../components/PrimaryBtn";
import GhostBtn from "../components/GhostBtn";
import { Padding, FontSize, Color, FontFamily } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
        <StatusBar backgroundColor={Color.bgBlack} />
      <View style={[styles.languagebtn, styles.languagebtnFlexBox]}>
        <Text style={styles.languagetext}>English</Text>
      </View>
      <HeroSection
        imageSrc={require("../assets/group-21.png")}
        imageSectionPadding="unset"
        imageSectionHeight={400}
        imageSectionPaddingHorizontal="unset"
        imageSectionPaddingVertical="unset"
        imageWrapperIconHeight={336}
      />
      <View style={[styles.titlesection, styles.languagebtnFlexBox]}>
        <Text style={styles.title}>
          <Text style={styles.craftYour}>{`CRAFT YOUR
`}</Text>
          <Text style={styles.magical}>MAGICAL</Text>
          <Text style={styles.craftYour}> SMILE</Text>
        </Text>
      </View>
      <View style={styles.btncontainer}>
        <View style={styles.patientbtnwrapperFlexBox}>
          <PrimaryBtn buttonText="I’M A PATIENT" />
        </View>
        <View
          style={[styles.dentistbtnwrapper, styles.patientbtnwrapperFlexBox]}
        >
          <GhostBtn ghostButtonText="I’M A DENTIST" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  languagebtnFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  patientbtnwrapperFlexBox: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_13xl,
    height: 40,
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  languagetext: {
    fontSize: FontSize.titleLarge_size,
    color: Color.colorPrimary,
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
  },
  languagebtn: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_13xl,
  },
  craftYour: {
    fontFamily: FontFamily.bodySmall,
  },
  magical: {
    fontWeight: "700",
    fontFamily: FontFamily.headingMediumBold,
  },
  title: {
    fontSize: FontSize.displayLarge_size,
    color: Color.colorWhite,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "center",
    flex: 1,
  },
  titlesection: {
    paddingHorizontal: 48,
    paddingVertical: Padding.p_3xs,
  },
  dentistbtnwrapper: {
    marginTop: 16,
  },
  btncontainer: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  home: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 844,
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
});

export default Home;
