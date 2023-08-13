import * as React from "react";
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
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CaseProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.caseprofile}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={[styles.header, styles.headerSpaceBlock]}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonSpaceBlock]}
            >
              <Text style={[styles.buttontext, styles.buttontextTypo]}>EN</Text>
            </Pressable>
            <View style={[styles.header1, styles.header1SpaceBlock]}>
              <Text style={styles.headertext}>Profile</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-11.png")}
            />
          </View>
          <View style={[styles.prfilecontainer, styles.headerSpaceBlock]}>
            <View style={[styles.profilecard, styles.inputgroupSpaceBlock1]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View style={styles.namewrapper}>
                      <Text style={styles.nametext}>Fullname</Text>
                    </View>
                  </View>
                  <View style={styles.greetingwrapper}>
                    <Text style={[styles.greeting, styles.inputtextTypo]}>
                      Greeting
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.uploadimage, styles.headerSpaceBlock]}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="cover"
                  source={require("../assets/defaultimage1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.formsection, styles.header1SpaceBlock]}>
            <View style={[styles.inputgroup, styles.inputgroupSpaceBlock1]}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock1]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/packageplus8.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.inputtextTypo]}>
                  Firstname
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
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock1]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/packageplus8.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.inputtextTypo]}>
                  Lastname
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
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock1]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/packageplus9.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.inputtextTypo]}>Email</Text>
                <TextInput
                  style={[styles.inputtext, styles.inputtextTypo]}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
            <View style={styles.inputgroupSpaceBlock}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock1]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/packageplus10.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.inputtextTypo]}>Phone</Text>
                <TextInput
                  style={[styles.inputtext, styles.inputtextTypo]}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
            <View style={styles.inputgroupSpaceBlock}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock1]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/packageplus11.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.inputtextTypo]}>
                  Birthday
                </Text>
                <TextInput
                  style={[styles.inputtext, styles.inputtextTypo]}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
            <View style={[styles.inputgroup5, styles.inputgroupSpaceBlock]}>
              <View
                style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock1]}
              >
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/packageplus12.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.inputtextTypo]}>Gender</Text>
                <View style={styles.input}>
                  <TextInput
                    style={[styles.inputtext5, styles.inputtextTypo]}
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
          </View>
        </View>
        <View style={[styles.prfilecontainer, styles.headerSpaceBlock]}>
          <TouchableOpacity
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseAddress")}
          >
            <Text style={[styles.buttontext1, styles.buttontextTypo]}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.bottomtabBg]}>
        <Image
          style={styles.iconLayout}
          resizeMode="contain"
          source={require("../assets/messagewrapper.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/youtube.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/info.png")}
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
  headerSpaceBlock: {
    padding: Padding.p_base,
    alignItems: "center",
  },
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
  inputgroupSpaceBlock1: {
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  inputtextTypo: {
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodySmall,
  },
  inputgroupSpaceBlock: {
    marginTop: 16,
    padding: Padding.p_5xs,
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  bottomtabBg: {
    backgroundColor: Color.bgBrown,
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
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
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
    textAlign: "left",
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
    overflow: "hidden",
  },
  profilecard: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
    borderRadius: Border.br_xs,
    padding: Padding.p_5xs,
    justifyContent: "space-between",
  },
  prfilecontainer: {
    alignSelf: "stretch",
  },
  packagePlusIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  inputiconwrapper: {
    justifyContent: "center",
    height: 40,
    width: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    alignItems: "center",
  },
  label: {
    color: Color.colorPrimary,
    textAlign: "left",
    alignSelf: "stretch",
  },
  inputtext: {
    alignSelf: "stretch",
  },
  fieldinput: {
    marginLeft: 8,
    height: 40,
    flex: 1,
  },
  inputgroup: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
    borderRadius: Border.br_xs,
    padding: Padding.p_5xs,
  },
  inputtext5: {
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
  inputgroup5: {
    height: 56,
  },
  formsection: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
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
  caseprofile: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 830,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseProfile;
