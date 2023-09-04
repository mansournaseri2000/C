import * as React from "react";
import { Pressable, StyleSheet, View,StatusBar } from "react-native";
import HeroSection from "../components/HeroSection";
import TitleSection from "../components/TitleSection";
import IndicatorSection from "../components/IndicatorSection";
import TextButton from "../components/TextButton";
import PrimaryBtnSmall from "../components/PrimaryBtnSmall";
import Container from "../components/Container";
import { Padding, Color } from "../GlobalStyles";

const OnboardingThree = () => {
  return (
    <Container>
      <HeroSection imageSrc={require("../assets/JplignLogo.png")} size="big"/>
      <TitleSection title="Guiding you towards a radiant smile and confident appearance"/>
      <IndicatorSection enabledIndicator={3}/>
      <Pressable style={[styles.btnsection, styles.btnsectionFlexBox]}>
        <TextButton skipText="Skip" goTo="Home" type="secondary"/>
        <PrimaryBtnSmall buttonText="Next" goTo="Home"/>
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

export default OnboardingThree;
