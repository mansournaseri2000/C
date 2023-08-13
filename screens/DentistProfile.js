import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding, FontFamily, FontSize } from "../GlobalStyles";

const DentistProfile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dentistprofile}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <Pressable
              style={[styles.iconbutton, styles.iconbuttonFlexBox]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={[styles.arrowLeftIcon, styles.iconLayout1]}
                resizeMode="contain"
                source={require("../assets/arrowleft.png")}
              />
            </Pressable>
            <View style={styles.header1}>
              <Text style={styles.headertext}>Profile</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-14.png")}
            />
          </View>
          <View style={styles.profilecontainer}>
            <View style={[styles.profilecard, styles.inputgroupFlexBox]}>
              <View>
                <View>
                  <View style={styles.profilenamewtrapper}>
                    <View
                      style={[styles.suffixwrapper, styles.iconbuttonFlexBox]}
                    >
                      <Text style={[styles.suffixtext, styles.suffixtextTypo]}>
                        Dr.
                      </Text>
                    </View>
                    <View
                      style={[styles.namewrapper, styles.iconbuttonFlexBox]}
                    >
                      <Text style={[styles.suffixtext, styles.suffixtextTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[styles.greetingwrapper, styles.iconbuttonFlexBox]}
                  >
                    <Text style={[styles.greeting, styles.inputtextTypo]}>
                      Greeting
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.uploadimage, styles.iconbuttonFlexBox]}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="contain"
                  source={require("../assets/defaultimage1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.formsection}>
            <View style={[styles.inputgroup, styles.inputgroupFlexBox]}>
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={[styles.arrowLeftIcon, styles.iconLayout1]}
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
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={[styles.arrowLeftIcon, styles.iconLayout1]}
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
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={[styles.arrowLeftIcon, styles.iconLayout1]}
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
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={[styles.arrowLeftIcon, styles.iconLayout1]}
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
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={[styles.arrowLeftIcon, styles.iconLayout1]}
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
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={[styles.arrowLeftIcon, styles.iconLayout1]}
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
            <View style={[styles.inputgroup5, styles.inputgroupSpaceBlock]}>
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={styles.iconLayout1}
                  resizeMode="contain"
                  source={require("../assets/packageplus13.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.inputtextTypo]}>
                  Country
                </Text>
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
            <View style={[styles.inputgroup5, styles.inputgroupSpaceBlock]}>
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={[styles.arrowLeftIcon, styles.iconLayout1]}
                  resizeMode="contain"
                  source={require("../assets/packageplus14.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.inputtextTypo]}>State</Text>
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
            <View style={[styles.inputgroup5, styles.inputgroupSpaceBlock]}>
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={[styles.arrowLeftIcon, styles.iconLayout1]}
                  resizeMode="contain"
                  source={require("../assets/packageplus14.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.inputtextTypo]}>City</Text>
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
            <View style={styles.inputgroupSpaceBlock}>
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={[styles.arrowLeftIcon, styles.iconLayout1]}
                  resizeMode="contain"
                  source={require("../assets/packageplus14.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.inputtextTypo]}>
                  Address
                </Text>
                <TextInput
                  style={[styles.inputtext, styles.inputtextTypo]}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
            <View style={styles.inputgroupSpaceBlock}>
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={[styles.arrowLeftIcon, styles.iconLayout1]}
                  resizeMode="contain"
                  source={require("../assets/packageplus15.png")}
                />
              </View>
              <View style={styles.fieldinput}>
                <Text style={[styles.label, styles.inputtextTypo]}>
                  Zip code
                </Text>
                <TextInput
                  style={[styles.inputtext, styles.inputtextTypo]}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.profilecontainer}>
          <TouchableOpacity
            style={[styles.growtextbutton, styles.bottomtabSpaceBlock]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("DentistHome")}
          >
            <Text style={[styles.buttontext, styles.suffixtextTypo]}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.bottomtabSpaceBlock]}>
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
  iconbuttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  inputgroupFlexBox: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
    padding: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  suffixtextTypo: {
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  inputtextTypo: {
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodySmall,
  },
  inputgroupSpaceBlock: {
    marginTop: 16,
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    padding: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  bottomtabSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  arrowLeftIcon: {
    overflow: "hidden",
  },
  iconbutton: {
    width: 40,
    padding: Padding.p_5xs,
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    flexDirection: "row",
  },
  headertext: {
    fontSize: FontSize.headingMediumBold_size,
    fontWeight: "700",
    fontFamily: FontFamily.headingMediumBold,
    textAlign: "center",
    color: Color.colorWhite,
  },
  header1: {
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
  suffixtext: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  suffixwrapper: {
    flexDirection: "row",
  },
  namewrapper: {
    marginLeft: 4,
    flexDirection: "row",
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
    flexDirection: "row",
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
    padding: Padding.p_base,
    overflow: "hidden",
  },
  profilecard: {
    backgroundColor: Color.bgBrown,
    justifyContent: "space-between",
  },
  profilecontainer: {
    padding: Padding.p_base,
    alignSelf: "stretch",
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
    alignItems: "center",
  },
  maincontainer: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttontext: {
    color: Color.gray,
    display: "flex",
    width: 304,
    height: 28,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  growtextbutton: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    paddingVertical: Padding.p_5xs,
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
    backgroundColor: Color.bgBrown,
    justifyContent: "space-between",
  },
  dentistprofile: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 1149,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default DentistProfile;
