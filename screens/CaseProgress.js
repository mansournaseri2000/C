import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const CaseProgress = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.caseprogress}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonSpaceBlock]}
            >
              <Text style={styles.buttontext}>EN</Text>
            </Pressable>
            <View style={styles.header1}>
              <Text style={styles.headertext}>Progress</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={styles.prfilecontainer}>
            <View style={styles.profilecard}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View style={styles.namewrapper}>
                      <Text style={styles.nametext}>Fullname</Text>
                    </View>
                  </View>
                  <View style={styles.playFlexBox}>
                    <Text style={[styles.greeting, styles.greetingTypo]}>
                      Greeting
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.uploadimage}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="cover"
                  source={require("../assets/defaultimage2.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.prfilecontainer}>
            <View style={styles.sloganwrapper}>
              <Text
                style={[styles.craftYourMagical, styles.numberTypo]}
              >{`CRAFT YOUR
MAGICAL SMILE`}</Text>
            </View>
            <View
              style={[
                styles.refinedeatailcontainer,
                styles.growtextbutton2SpaceBlock,
              ]}
            >
              <View style={styles.refinewrapper}>
                <View
                  style={[styles.counterwrapper, styles.counterwrapperLayout]}
                >
                  <View style={styles.refinewrapper}>
                    <Text style={[styles.titletext, styles.greetingTypo]}>
                      Wearing
                    </Text>
                  </View>
                  <View style={styles.refinewrapper}>
                    <Text style={styles.labeltext}>ALIGNER</Text>
                  </View>
                  <View style={styles.counternumber}>
                    <Text style={[styles.number, styles.numberTypo]}>1</Text>
                  </View>
                </View>
                <View style={styles.refinedatewrapper}>
                  <View style={[styles.datacard, styles.datacardSpaceBlock]}>
                    <View style={styles.refinewrapper}>
                      <Text style={styles.label}>Request</Text>
                    </View>
                    <View style={styles.refinewrapper}>
                      <Text style={styles.date}>29/06/2023</Text>
                    </View>
                  </View>
                  <View style={[styles.datacard1, styles.datacardSpaceBlock]}>
                    <View style={styles.refinewrapper}>
                      <Text style={styles.label1}>Post</Text>
                    </View>
                    <View style={styles.refinewrapper}>
                      <Text style={styles.date}>29/06/2023</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.progresscontainer}>
            <View style={[styles.slidercontainer, styles.bottomtabBorder]}>
              <Image
                style={styles.sliderIcon}
                resizeMode="contain"
                source={require("../assets/slider.png")}
              />
            </View>
            <View style={[styles.play, styles.playFlexBox]}>
              <Image
                style={styles.playCircleIcon}
                resizeMode="contain"
                source={require("../assets/playcircle.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.prfilecontainer}>
          <Pressable
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
          >
            <Text style={[styles.buttontext1, styles.buttontext1FlexBox]}>
              Refine Your Treatment
            </Text>
          </Pressable>
          <TouchableOpacity
            style={[styles.growtextbutton2, styles.counterwrapperLayout]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseGuarantees")}
          >
            <Text style={[styles.ghostbuttontext, styles.buttontext1FlexBox]}>
              New Treatment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.bottomtabBorder]}>
        <Image
          style={styles.iconLayout}
          resizeMode="contain"
          source={require("../assets/messagewrapper.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/youtube3.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/info3.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/condition2.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/logout.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  growtextbuttonSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  greetingTypo: {
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  numberTypo: {
    fontSize: FontSize.displayLarge_size,
    fontFamily: FontFamily.bodySmall,
  },
  growtextbutton2SpaceBlock: {
    marginTop: 10,
    alignSelf: "stretch",
  },
  counterwrapperLayout: {
    borderWidth: 1,
    alignItems: "center",
  },
  datacardSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_xs,
    width: 125,
    borderRadius: Border.br_xs,
    alignItems: "center",
  },
  bottomtabBorder: {
    borderColor: "#000",
    borderStyle: "solid",
  },
  playFlexBox: {
    marginTop: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  buttontext1FlexBox: {
    width: 304,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  buttontext: {
    textAlign: "center",
    color: Color.gray,
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  growtextbutton: {
    width: 40,
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    alignItems: "center",
  },
  headertext: {
    fontWeight: "700",
    fontFamily: FontFamily.headingMediumBold,
    color: Color.colorWhite,
    fontSize: FontSize.headingMediumBold_size,
    textAlign: "center",
  },
  header1: {
    height: 30,
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  headerChild: {
    width: 50,
    height: 40,
  },
  header: {
    padding: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nametext: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  namewrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  profilenamewtrapper: {
    flexDirection: "row",
  },
  greeting: {
    color: Color.colorDarkgray,
  },
  profileinfowrapper1: {
    alignSelf: "stretch",
    flex: 1,
  },
  profileinfowrapper: {
    height: 53,
  },
  defaultimageIcon: {
    width: 20,
    height: 32,
  },
  uploadimage: {
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    justifyContent: "center",
    padding: Padding.p_base,
    alignItems: "center",
    overflow: "hidden",
  },
  profilecard: {
    padding: Padding.p_5xs,
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  craftYourMagical: {
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.colorWhite,
    textAlign: "center",
  },
  sloganwrapper: {
    padding: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  titletext: {
    color: Color.colorPrimary,
  },
  refinewrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  labeltext: {
    color: Color.colorPrimary,
    textAlign: "left",
    fontSize: FontSize.headingMediumBold_size,
    fontFamily: FontFamily.bodySmall,
  },
  number: {
    color: Color.colorPrimary,
    textAlign: "left",
  },
  counternumber: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  counterwrapper: {
    borderColor: "#c5ab8e",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: Border.br_xs,
    padding: Padding.p_base,
  },
  label: {
    fontSize: FontSize.titleLarge_size,
    textAlign: "left",
    color: Color.gray,
    fontFamily: FontFamily.bodySmall,
  },
  date: {
    color: Color.colorLightgray,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  datacard: {
    backgroundColor: Color.colorPrimary,
  },
  label1: {
    fontSize: FontSize.titleLarge_size,
    color: Color.colorPrimary,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  datacard1: {
    backgroundColor: Color.bgBrown,
  },
  refinedatewrapper: {
    marginLeft: 32,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  refinedeatailcontainer: {
    alignItems: "center",
  },
  sliderIcon: {
    width: 300,
    height: 200,
    borderRadius: Border.br_mini,
  },
  slidercontainer: {
    width: 297,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  playCircleIcon: {
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  play: {
    alignSelf: "stretch",
  },
  progresscontainer: {
    width: 390,
    padding: Padding.p_base,
    alignItems: "center",
    overflow: "hidden",
  },
  maincontainer: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttontext1: {
    height: 28,
    color: Color.gray,
    fontSize: FontSize.titleMedium_size,
  },
  growtextbutton1: {
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    alignSelf: "stretch",
    alignItems: "center",
  },
  ghostbuttontext: {
    fontSize: FontSize.titleLarge_size,
    color: Color.colorPrimary,
    alignSelf: "stretch",
  },
  growtextbutton2: {
    borderColor: "#c5ab8e",
    borderStyle: "solid",
    borderWidth: 1,
    marginTop: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    height: 40,
    borderRadius: Border.br_mini,
  },
  container: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  youtubeIcon: {
    overflow: "hidden",
  },
  bottomtab: {
    borderTopWidth: 5,
    backgroundColor: Color.bgBrown,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  caseprogress: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 1017,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseProgress;
