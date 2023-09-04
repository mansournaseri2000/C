import * as React from "react";
import { Pressable, StyleSheet, View,StatusBar } from "react-native";
import HeroSection from "../components/HeroSection";
import TitleSection from "../components/TitleSection";
import IndicatorSection from "../components/IndicatorSection";
import TextButton from "../components/TextButton";
import PrimaryBtnSmall from "../components/PrimaryBtnSmall";
import Container from "../components/Container";
import { Padding, Color } from "../GlobalStyles";

const OnboardingTow = () => {
  return (
    <Container>
      <HeroSection imageSrc={require("../assets/3Dimage.png")} size="big"/>
      <TitleSection title="Aesthetic 3D simulation plan for your teeth correction"/>
      <IndicatorSection enabledIndicator={2}/>
      <Pressable style={[styles.btnsection, styles.btnsectionFlexBox]}>
        <TextButton skipText="Skip" goTo="Home" type="secondary"/>
        <PrimaryBtnSmall buttonText="Next" goTo="OnboardingThree"/>
      </Pressable>
      </Container>
  );
};

const styles = StyleSheet.create({
  btnsectionFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnsection: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingVertical: 16,
  },
});

export default OnboardingTow;
