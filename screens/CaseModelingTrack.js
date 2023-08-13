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

const CaseModelingTrack = () => {
  const [radioBtnselectedIndex, setRadioBtnselectedIndex] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.casemodelingtrack}>
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
              <Text style={styles.headertext}>Track Modeling</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={styles.prfilecontainer}>
            <View style={[styles.profilecard, styles.videoBg]}>
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
                  source={require("../assets/defaultimage.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.formsection, styles.header1SpaceBlock]}>
            <View style={[styles.inputgroup, styles.videoBg]}>
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
                  style={[styles.inputtext, styles.inputtextTypo]}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
            <View style={styles.inputgroupSpaceBlock}>
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
                  style={[styles.inputtext, styles.inputtextTypo]}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
            <View style={styles.inputgroupSpaceBlock}>
              <View
                style={[styles.inputiconwrapper, styles.growtextbuttonLayout]}
              >
                <Image
                  style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                  resizeMode="contain"
                  source={require("../assets/packageplus20.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.labelTypo]}>Post Code</Text>
                <TextInput
                  style={[styles.inputtext, styles.inputtextTypo]}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
            <View style={styles.inputgroupSpaceBlock}>
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
                <Text style={[styles.label, styles.labelTypo]}>Send Date</Text>
                <TextInput
                  style={[styles.inputtext, styles.inputtextTypo]}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
            <View style={[styles.inputgroup4, styles.inputgroupSpaceBlock]}>
              <View
                style={[styles.inputiconwrapper, styles.growtextbuttonLayout]}
              >
                <Image
                  style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                  resizeMode="contain"
                  source={require("../assets/packageplus14.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.labelTypo]}>Address</Text>
                <View style={styles.input}>
                  <TextInput
                    style={[styles.inputtext4, styles.inputtextTypo]}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.inputgroupSpaceBlock}>
              <View
                style={[styles.inputiconwrapper, styles.growtextbuttonLayout]}
              >
                <Image
                  style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                  resizeMode="contain"
                  source={require("../assets/packageplus15.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.labelTypo]}>Zip Code</Text>
                <TextInput
                  style={[styles.inputtext, styles.inputtextTypo]}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={[styles.video, styles.videoBg]}>
              <View style={styles.inputgroup6}>
                <View
                  style={[styles.inputiconwrapper, styles.growtextbuttonLayout]}
                >
                  <Image
                    style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                    resizeMode="contain"
                    source={require("../assets/packageplus16.png")}
                  />
                </View>
                <Text style={[styles.label6, styles.labelTypo]}>
                  Modeling kit tutorial
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
                Do you send back your modeling kit?
              </Text>
            </View> */}
          </View>
        </View>
        <View style={styles.prfilecontainer}>
          <TouchableOpacity
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseMedical")}
          >
            <Text style={[styles.buttontext1, styles.buttontextTypo]}>
              Next
            </Text>
          </TouchableOpacity>
          <View style={[styles.underbtntext, styles.header1SpaceBlock]}>
            <Text style={[styles.nametext, styles.nametextTypo]}>
              Upload impression file?
            </Text>
            <TouchableOpacity
              style={styles.actiontext}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("CaseImperssion")}
            >
              <Text style={[styles.impersion, styles.labelTypo]}>
                Impersion
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.videoBg]}>
        <Image
          style={styles.iconLayout}
          resizeMode="contain"
          source={require("../assets/messagewrapper.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/youtube2.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/info2.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/condition.png")}
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
  videoBg: {
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
  inputtextTypo: {
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.bodyMedium_size,
  },
  inputgroupSpaceBlock: {
    marginTop: 16,
    padding: Padding.p_5xs,
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    alignSelf: "stretch",
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
    height: 32,
    width: 20,
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
  inputtext4: {
    fontSize: FontSize.bodyMedium_size,
    flex: 1,
  },
  chevronDownIcon: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  input: {
    height: 19,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputgroup4: {
    height: 56,
  },
  formsection: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  label6: {
    marginLeft: 8,
    fontSize: FontSize.titleMedium_size,
    flex: 1,
  },
  inputgroup6: {
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
  impersion: {
    fontSize: FontSize.titleMedium_size,
  },
  actiontext: {
    marginLeft: 8,
  },
  underbtntext: {
    marginTop: 10,
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    flexDirection: "row",
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
  casemodelingtrack: {
    backgroundColor: Color.bgBlack,
    height: 1214,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default CaseModelingTrack;
