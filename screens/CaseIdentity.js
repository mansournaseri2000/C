import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CaseIdentity = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.caseidentity}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={[styles.header, styles.headerFlexBox]}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonSpaceBlock]}
            >
              <Text style={[styles.buttontext, styles.buttontextTypo]}>EN</Text>
            </Pressable>
            <View style={[styles.header1, styles.header1SpaceBlock]}>
              <Text style={styles.headertext}>Verification</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/JplignLogo.png")}
            />
          </View>
          <View style={styles.headerFlexBox}>
            <View style={[styles.profilecard, styles.indentifycardBg]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View style={styles.namewrapper}>
                      <Text style={styles.nametext}>Fullname</Text>
                    </View>
                  </View>
                  <View style={styles.greetingwrapper}>
                    <Text style={styles.greeting}>Greeting</Text>
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
          <View style={[styles.uploadcontainer, styles.header1SpaceBlock]}>
            <View style={[styles.indentifycard, styles.indentifycardBg]}>
              <View style={styles.inputgroup}>
                <View
                  style={[styles.inputiconwrapper, styles.growtextbuttonLayout]}
                >
                  <Image
                    style={styles.packagePlusIcon}
                    resizeMode="contain"
                    source={require("../assets/icons/Identification.png")}
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
                source={require("../assets/IdentificationImg.png")}
              />
              <View style={styles.uploadwrapper}>
                <View style={styles.camerabtnLayout}>
                  <Image
                    style={styles.packagePlusIcon}
                    resizeMode="contain"
                    source={require("../assets/icons/image.png")}
                  />
                </View>
                <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                  <Image
                    style={styles.packagePlusIcon}
                    resizeMode="contain"
                    source={require("../assets/icons/camera.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.indentifycard1, styles.indentifycardBg]}>
              <View style={styles.inputgroup}>
                <View
                  style={[styles.inputiconwrapper, styles.growtextbuttonLayout]}
                >
                  <Image
                    style={styles.packagePlusIcon}
                    resizeMode="contain"
                    source={require("../assets/icons/Identification.png")}
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
                source={require("../assets/InsuranceImg.png")}
              />
              <View style={styles.uploadwrapper}>
                <View style={styles.camerabtnLayout}>
                  <Image
                    style={styles.packagePlusIcon}
                    resizeMode="contain"
                    source={require("../assets/icons/camera.png")}
                  />
                </View>
                <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                  <Image
                    style={styles.packagePlusIcon}
                    resizeMode="contain"
                    source={require("../assets/icons/camera.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.headerFlexBox}>
          <TouchableOpacity
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseModelingShop")}
          >
            <Text style={[styles.buttontext1, styles.buttontextTypo]}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.indentifycardBg]}>
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
  headerFlexBox: {
    padding: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
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
  indentifycardBg: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
  },
  growtextbuttonLayout: {
    width: 40,
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    alignItems: "center",
  },
  labelTypo: {
    marginLeft: 8,
    color: Color.colorPrimary,
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  camerabtnLayout: {
    paddingVertical: 40,
    backgroundColor: Color.gray,
    paddingHorizontal: 8,
    borderRadius: 50,
    justifyContent: "center",
    height: 40,
    width: 40,
    flexDirection: "row",
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nametext: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: "Poppins-Regular",
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
    textAlign: "left",
    fontFamily: "Poppins-Regular",
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
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    borderRadius: 50,
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
  packagePlusIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  inputiconwrapper: {
    padding: 8,
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
  },
  label: {
    textAlign: "left",
    flex: 1,
  },
  label1: {
    textAlign: "right",
  },
  inputgroup: {
    borderRadius: 12,
    flexDirection: "row",
    alignSelf: "stretch",
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
    paddingHorizontal: 8,
    marginTop: 8,
    paddingVertical: 0,
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  indentifycard: {
    height: 262,
    padding: 8,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  indentifycard1: {
    marginTop: 16,
    padding: 8,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  uploadcontainer: {
    paddingHorizontal: 16,
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
    borderRadius: 15,
    paddingVertical: 8,
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  caseidentity: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 919,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseIdentity;
