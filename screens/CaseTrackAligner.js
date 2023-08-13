import React, { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import Video from "react-native-video";
import {
  RadioGroup as RNKRadioGroup,
  Radio as RNKRadio,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CaseTrackAligner = () => {
  const [radioBtnselectedIndex, setRadioBtnselectedIndex] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.casetrackaligner}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonSpaceBlock]}
            >
              <Text style={[styles.buttontext, styles.buttontextTypo]}>EN</Text>
            </Pressable>
            <View style={[styles.header1, styles.header1SpaceBlock]}>
              <Text style={styles.headertext}>Track Aligner</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={styles.prfilecontainer}>
            <View style={[styles.profilecard, styles.inputgroupBg]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View style={styles.namewrapper}>
                      <Text style={[styles.nametext, styles.nametextTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View style={styles.greetingwrapper}>
                    <Text style={[styles.greeting, styles.nametextTypo]}>
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
          <View style={[styles.formsection, styles.header1SpaceBlock]}>
            <View style={[styles.inputgroup, styles.inputgroupBg]}>
              <View
                style={[styles.inputiconwrapper, styles.growtextbuttonLayout]}
              >
                <Image
                  style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                  resizeMode="contain"
                  source={require("../assets/packageplus19.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.labelTypo]}>
                  Tracking Code
                </Text>
                <TextInput
                  style={styles.inputtext}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupBg]}>
              <View
                style={[styles.inputiconwrapper, styles.growtextbuttonLayout]}
              >
                <Image
                  style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                  resizeMode="contain"
                  source={require("../assets/packageplus11.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.labelTypo]}>Post Date</Text>
                <TextInput
                  style={styles.inputtext}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={[styles.video, styles.inputgroupBg]}>
              <View style={styles.inputgroup2}>
                <View
                  style={[styles.inputiconwrapper, styles.growtextbuttonLayout]}
                >
                  <Image
                    style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                    resizeMode="contain"
                    source={require("../assets/packageplus16.png")}
                  />
                </View>
                <Text style={[styles.label2, styles.labelTypo]}>
                  Aligner tutorial
                </Text>
              </View>
              <View style={styles.videoinfowrapper}>
                <Text style={[styles.videoinfotext, styles.nametextTypo]}>
                  Please watch the following video carefully before sending any
                  pictures or videos so that you can choose the best angles for
                  photographing the face.
                </Text>
              </View>
              <View style={styles.videocoverwrapper}>
                <Video
                  style={styles.video1}
                  volume={1}
                  controls={true}
                  source={{ uri: "undefined" }}
                  resizeMode="contain"
                />
              </View>
            </View>
            {/* <View style={styles.acceptancewrapper}>
              <RNKRadioGroup
                style={[styles.radiobtn, styles.radiobtnLayout]}
                selectedIndex={radioBtnselectedIndex}
                onChange={setRadioBtnselectedIndex}
              >
                <RNKRadio status="warning">
                  {() => (
                    <Text style={styles.radioBtnText}> AcceptCondition</Text>
                  )}
                </RNKRadio>
              </RNKRadioGroup>
              <Text style={[styles.acceptancetext, styles.nametextTypo]}>
                Do you receive your aligner package?
              </Text>
            </View> */}
          </View>
        </View>
        <View style={styles.prfilecontainer}>
          <TouchableOpacity
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseTrackStructure")}
          >
            <Text style={[styles.buttontext1, styles.buttontextTypo]}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.inputgroupBg]}>
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
  radioBtnText: {},
  growtextbuttonSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  buttontextTypo: {
    color: Color.gray,
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  header1SpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  inputgroupBg: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
  },
  nametextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  growtextbuttonLayout: {
    width: 40,
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    alignItems: "center",
  },
  radiobtnLayout: {
    height: 24,
    width: 24,
  },
  labelTypo: {
    color: Color.colorPrimary,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  buttontext: {
    textAlign: "center",
  },
  growtextbutton: {
    justifyContent: "center",
    height: 40,
    width: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    alignItems: "center",
  },
  headertext: {
    fontSize: FontSize.headingMediumBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.headingMediumBold,
    color: Color.colorWhite,
    textAlign: "center",
  },
  header1: {
    height: 30,
    paddingHorizontal: Padding.p_3xs,
    justifyContent: "center",
    flexDirection: "row",
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
    color: Color.colorWhite,
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
    fontSize: FontSize.bodyMedium_size,
  },
  greetingwrapper: {
    marginTop: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
    borderRadius: Border.br_xs,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  packagePlusIcon: {
    overflow: "hidden",
  },
  inputiconwrapper: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
  },
  label: {
    fontSize: FontSize.bodyMedium_size,
    alignSelf: "stretch",
  },
  inputtext: {
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodySmall,
    alignSelf: "stretch",
  },
  fieldinput: {
    marginLeft: 8,
    height: 40,
    flex: 1,
  },
  inputgroup: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  inputgroup1: {
    marginTop: 16,
    padding: Padding.p_5xs,
    borderRadius: Border.br_xs,
    flexDirection: "row",
  },
  formsection: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  label2: {
    marginLeft: 8,
    fontSize: FontSize.titleMedium_size,
    flex: 1,
  },
  inputgroup2: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  videoinfotext: {
    color: Color.colorWhite,
    fontSize: FontSize.titleMedium_size,
    flex: 1,
  },
  videoinfowrapper: {
    paddingHorizontal: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  video1: {
    height: "100%",
    width: "100%",
  },
  videocoverwrapper: {
    padding: Padding.p_5xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  video: {
    borderRadius: Border.br_xs,
  },
  radiobtn: {
    borderRadius: Border.br_81xl,
  },
  acceptancetext: {
    marginLeft: 8,
    color: Color.colorWhite,
    fontSize: FontSize.titleMedium_size,
  },
  acceptancewrapper: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  infocontainer: {
    justifyContent: "center",
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
  maincontainer: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttontext1: {
    display: "flex",
    width: 304,
    height: 28,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  growtextbutton1: {
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    paddingVertical: Padding.p_5xs,
    alignSelf: "stretch",
    alignItems: "center",
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
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 5,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  casetrackaligner: {
    backgroundColor: Color.bgBlack,
    height: 890,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default CaseTrackAligner;
