import React, { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
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

const CaseImperssion = () => {
  const [radioBtnselectedIndex, setRadioBtnselectedIndex] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.caseimperssion}>
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
              <Text style={styles.headertext}>Impression</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/JplignLogo.png")}
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
                  source={require("../assets/ProfileImg.png")}
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
                  source={require("../assets/icons/postcode.png")}
                />
              </View>
              <View style={styles.fieldwrapper}>
                <Text style={[styles.lable, styles.lableTypo]}>Upper Arch</Text>
                <Text style={[styles.inputphone, styles.nametextTypo]}>
                  ...
                </Text>
              </View>
              <Pressable style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                  resizeMode="contain"
                  source={require("../assets/icons/upload-cloud.png")}
                />
              </Pressable>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupBg]}>
              <View
                style={[styles.inputiconwrapper, styles.growtextbuttonLayout]}
              >
                <Image
                  style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                  resizeMode="contain"
                  source={require("../assets/icons/postcode.png")}
                />
              </View>
              <View style={styles.fieldwrapper}>
                <Text style={[styles.lable, styles.lableTypo]}>Lower Arch</Text>
                <Text style={[styles.inputphone, styles.nametextTypo]}>
                  ...
                </Text>
              </View>
              <Pressable style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                  resizeMode="contain"
                  source={require("../assets/icons/upload-cloud.png")}
                />
              </Pressable>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupBg]}>
              <View
                style={[styles.inputiconwrapper, styles.growtextbuttonLayout]}
              >
                <Image
                  style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                  resizeMode="contain"
                  source={require("../assets/icons/postcode.png")}
                />
              </View>
              <View style={styles.fieldwrapper}>
                <Text style={[styles.lable, styles.lableTypo]}>Both Arch</Text>
                <Text style={[styles.inputphone, styles.nametextTypo]}>
                  ...
                </Text>
              </View>
              <Pressable style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                  resizeMode="contain"
                  source={require("../assets/icons/upload-cloud.png")}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.infocontainer}>
            <View style={[styles.video, styles.inputgroupBg]}>
              <View style={styles.inputgroup3}>
                <View
                  style={[styles.inputiconwrapper, styles.growtextbuttonLayout]}
                >
                  <Image
                    style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                    resizeMode="contain"
                    source={require("../assets/icons/film.png")}
                  />
                </View>
                <Text style={[styles.label, styles.lableTypo]}>
                  Imperssion Tutorial
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
                Do you upload impression files?
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
              Post modeling kit?
            </Text>
            <TouchableOpacity
              style={styles.actiontext}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("CaseModelingTrack")}
            >
              <Text style={[styles.trackModeling, styles.lableTypo]}>
                Track Modeling
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.inputgroupBg]}>
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
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    fontSize: 18,
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
  lableTypo: {
    color: Color.colorPrimary,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
  },
  iconbuttonFlexBox: {
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
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
    width: 20,
    height: 32,
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
  lable: {
    fontSize: 18,
    alignSelf: "stretch",
  },
  inputphone: {
    color: Color.colorLightgray,
    fontSize: 18,
    alignSelf: "stretch",
  },
  fieldwrapper: {
    marginLeft: 8,
    height: 40,
    flex: 1,
  },
  iconbutton: {
    marginLeft: 8,
    padding: 8,
    justifyContent: "center",
    flexDirection: "row",
  },
  inputgroup: {
    padding: 8,
    borderRadius: 12,
    flexDirection: "row",
  },
  inputgroup1: {
    marginTop: 16,
    padding: 8,
    borderRadius: 12,
    flexDirection: "row",
  },
  formsection: {
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  label: {
    marginLeft: 8,
    fontSize: 18,
    flex: 1,
  },
  inputgroup3: {
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
    borderRadius: 100,
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
    alignSelf: "stretch",
    alignItems: "center",
  },
  trackModeling: {
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
  caseimperssion: {
    backgroundColor: Color.bgBlack,
    height: 1024,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default CaseImperssion;
