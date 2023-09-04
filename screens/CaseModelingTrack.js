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
              source={require("../assets/JplignLogo.png")}
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
                  source={require("../assets/ProfileImg.png")}
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
                  source={require("../assets/icons/reason.png")}
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
                  source={require("../assets/icons/gender.png")}
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
                  source={require("../assets/icons/help-circle.png")}
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
                  source={require("../assets/icons/gender.png")}
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
                  source={require("../assets/icons/mailbox.png")}
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
                    source={require("../assets/icons/chevrondown.png")}
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
                  source={require("../assets/icons/users.png")}
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
                    source={require("../assets/icons/film.png")}
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
          source={require("../assets/icons/message-circle.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/icons/youtube.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/icons/info.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/icons/condition.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/icons/log-out.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  radioBtnText: {},
  growtextbuttonSpaceBlock: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  buttontextTypo: {
    color: Color.gray,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
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
    fontFamily: "Poppins-Regular",
  },
  growtextbuttonLayout: {
    width: 40,
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    alignItems: "center",
  },
  radiobtnLayout: {
    height: 24,
    width: 24,
  },
  labelTypo: {
    color: Color.colorPrimary,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
  },
  inputtextTypo: {
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  inputgroupSpaceBlock: {
    marginTop: 16,
    padding: 8,
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
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
    borderRadius: 15,
    alignItems: "center",
  },
  headertext: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    color: Color.colorWhite,
    textAlign: "center",
  },
  header1: {
    height: 30,
    paddingHorizontal: 10,
    justifyContent: "center",
    flexDirection: "row",
  },
  headerChild: {
    width: 50,
    height: 40,
  },
  header: {
    padding: 16,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nametext: {
    color: Color.colorWhite,
    fontSize: 18,
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
    fontSize: 18,
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
    borderRadius: 50,
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    overflow: "hidden",
  },
  profilecard: {
    padding: 8,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  packagePlusIcon: {
    overflow: "hidden",
  },
  inputiconwrapper: {
    padding: 8,
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
  },
  label: {
    fontSize: 18,
    alignSelf: "stretch",
  },
  inputtext: {
    fontSize: 18,
    alignSelf: "stretch",
  },
  fieldinput: {
    marginLeft: 8,
    height: 40,
    flex: 1,
  },
  inputgroup: {
    padding: 8,
    borderRadius: 12,
    flexDirection: "row",
  },
  inputtext4: {
    fontSize: 18,
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
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  label6: {
    marginLeft: 8,
    fontSize: 18,
    flex: 1,
  },
  inputgroup6: {
    padding: 8,
    borderRadius: 12,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  videoinfotext: {
    color: Color.colorWhite,
    fontSize: 18,
    flex: 1,
  },
  videoinfowrapper: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  video1: {
    height: "100%",
    width: "100%",
  },
  videocoverwrapper: {
    padding: 8,
    alignSelf: "stretch",
    alignItems: "center",
  },
  video: {
    borderRadius: 12,
  },
  radiobtn: {
    borderRadius: Border.br_81xl,
  },
  acceptancetext: {
    marginLeft: 8,
    color: Color.colorWhite,
    fontSize: 18,
  },
  acceptancewrapper: {
    padding: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  infocontainer: {
    justifyContent: "center",
    padding: 16,
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
    borderRadius: 15,
    paddingVertical: 8,
    alignSelf: "stretch",
    alignItems: "center",
  },
  impersion: {
    fontSize: 18,
  },
  actiontext: {
    marginLeft: 8,
  },
  underbtntext: {
    marginTop: 10,
    justifyContent: "center",
    paddingHorizontal: 16,
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
    paddingVertical: 8,
    paddingHorizontal: 16,
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
