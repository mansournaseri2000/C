import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const DentistIdentity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dentistidentity}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={[styles.header, styles.headerFlexBox]}>
            <Pressable
              style={[styles.iconbutton, styles.indentifycardFlexBox]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.arrowLeftIcon}
                resizeMode="contain"
                source={require("../assets/arrowleft.png")}
              />
            </Pressable>
            <View style={styles.header1}>
              <Text style={styles.headertext}>Identity</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-1.png")}
            />
          </View>
          <View style={styles.headerFlexBox}>
            <View style={[styles.profilecard, styles.indentifycardLayout]}>
              <View>
                <View>
                  <View style={styles.profilenamewtrapper}>
                    <View
                      style={[
                        styles.suffixwrapper,
                        styles.indentifycardFlexBox,
                      ]}
                    >
                      <Text style={[styles.suffixtext, styles.suffixtextTypo]}>
                        Dr.
                      </Text>
                    </View>
                    <View
                      style={[styles.namewrapper, styles.indentifycardFlexBox]}
                    >
                      <Text style={[styles.suffixtext, styles.suffixtextTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.greetingwrapper,
                      styles.indentifycardFlexBox,
                    ]}
                  >
                    <Text style={styles.greeting}>Greeting</Text>
                  </View>
                </View>
              </View>
              <View style={styles.uploadimage}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="contain"
                  source={require("../assets/defaultimage.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.uploadcontainer}>
            <View style={[styles.indentifycard, styles.indentifycardLayout]}>
              <View style={[styles.inputgroup, styles.indentifycardLayout]}>
                <View style={[styles.iconbutton, styles.indentifycardFlexBox]}>
                  <Image
                    style={styles.arrowLeftIcon}
                    resizeMode="contain"
                    source={require("../assets/identification1.png")}
                  />
                </View>
                <Text style={[styles.label, styles.labelTypo]}>
                  Identity Card
                </Text>
                <Text style={[styles.label1, styles.labelTypo]}>Optional</Text>
              </View>
              <ImageBackground
                style={styles.identificationimageIcon}
                resizeMode="contain"
                source={require("../assets/identificationimage.png")}
              />
              <View style={styles.uploadwrapper}>
                <View style={styles.camerabtnLayout}>
                  <Image
                    style={styles.arrowLeftIcon}
                    resizeMode="contain"
                    source={require("../assets/image1.png")}
                  />
                </View>
                <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                  <Image
                    style={styles.arrowLeftIcon}
                    resizeMode="contain"
                    source={require("../assets/camera1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.indentifycard1, styles.indentifycardLayout]}>
              <View style={[styles.inputgroup, styles.indentifycardLayout]}>
                <View style={[styles.iconbutton, styles.indentifycardFlexBox]}>
                  <Image
                    style={styles.arrowLeftIcon}
                    resizeMode="contain"
                    source={require("../assets/identification1.png")}
                  />
                </View>
                <Text style={[styles.label, styles.labelTypo]}>
                  Insurance Card
                </Text>
                <Text style={[styles.label1, styles.labelTypo]}>Optional</Text>
              </View>
              <ImageBackground
                style={styles.identificationimageIcon}
                resizeMode="contain"
                source={require("../assets/isuranceimage.png")}
              />
              <View style={styles.uploadwrapper}>
                <View style={styles.camerabtnLayout}>
                  <Image
                    style={styles.arrowLeftIcon}
                    resizeMode="contain"
                    source={require("../assets/camera2.png")}
                  />
                </View>
                <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                  <Image
                    style={styles.arrowLeftIcon}
                    resizeMode="contain"
                    source={require("../assets/camera2.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.indentifycard1, styles.indentifycardLayout]}>
              <View style={[styles.inputgroup, styles.indentifycardLayout]}>
                <View style={[styles.iconbutton, styles.indentifycardFlexBox]}>
                  <Image
                    style={styles.arrowLeftIcon}
                    resizeMode="contain"
                    source={require("../assets/award.png")}
                  />
                </View>
                <Text style={[styles.label, styles.labelTypo]}>
                  Doctoral Certification
                </Text>
                <Text style={[styles.label1, styles.labelTypo]}>Optional</Text>
              </View>
              <ImageBackground
                style={styles.certificationimageIcon}
                resizeMode="contain"
                source={require("../assets/certificationimage.png")}
              />
              <View style={styles.uploadwrapper}>
                <View style={styles.camerabtnLayout}>
                  <Image
                    style={styles.arrowLeftIcon}
                    resizeMode="contain"
                    source={require("../assets/image2.png")}
                  />
                </View>
                <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                  <Image
                    style={styles.arrowLeftIcon}
                    resizeMode="contain"
                    source={require("../assets/camera3.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerFlexBox}>
          <TouchableOpacity
            style={[styles.growtextbutton, styles.bottomtabSpaceBlock]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("DentistHome")}
          >
            <Text style={[styles.buttontext, styles.suffixtextTypo]}>
              Upload Document
            </Text>
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
  headerFlexBox: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  indentifycardFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  indentifycardLayout: {
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  suffixtextTypo: {
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  labelTypo: {
    marginLeft: 8,
    color: Color.colorPrimary,
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodySmall,
  },
  camerabtnLayout: {
    paddingVertical: Padding.p_21xl,
    backgroundColor: Color.gray,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    height: 40,
    width: 40,
    flexDirection: "row",
    alignItems: "center",
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
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconbutton: {
    padding: Padding.p_5xs,
    height: 40,
    width: 40,
    justifyContent: "center",
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
    flexDirection: "row",
    justifyContent: "space-between",
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
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  greetingwrapper: {
    marginTop: 8,
    flexDirection: "row",
  },
  defaultimageIcon: {
    width: 20,
    height: 32,
  },
  uploadimage: {
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    padding: Padding.p_base,
    alignItems: "center",
    overflow: "hidden",
  },
  profilecard: {
    backgroundColor: Color.bgBrown,
    padding: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  label: {
    textAlign: "left",
    flex: 1,
  },
  label1: {
    textAlign: "right",
  },
  inputgroup: {
    flexDirection: "row",
  },
  identificationimageIcon: {
    height: 150,
    marginTop: 8,
    alignSelf: "stretch",
  },
  camerabtn: {
    marginLeft: 16,
  },
  uploadwrapper: {
    paddingHorizontal: Padding.p_5xs,
    marginTop: 8,
    paddingVertical: 0,
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  indentifycard: {
    backgroundColor: Color.bgBrown,
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_5xs,
    overflow: "hidden",
  },
  indentifycard1: {
    marginTop: 16,
    backgroundColor: Color.bgBrown,
    justifyContent: "center",
    alignItems: "center",
    padding: Padding.p_5xs,
    overflow: "hidden",
  },
  certificationimageIcon: {
    height: 212,
    marginTop: 8,
    alignSelf: "stretch",
  },
  uploadcontainer: {
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
  dentistidentity: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 1257,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default DentistIdentity;
