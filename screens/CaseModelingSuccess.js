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
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const CaseModelingSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.casemodelingsuccess}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <Pressable
              style={[
                styles.growtextbutton,
                styles.growtextbuttonWrapperFlexBox,
              ]}
            >
              <Text style={[styles.buttontext, styles.buttontextTypo]}>EN</Text>
            </Pressable>
            <View style={[styles.header1, styles.growtextbuttonWrapperFlexBox]}>
              <Text style={styles.headertext}>Modeling Payment</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={styles.prfilecontainer}>
            <View style={[styles.profilecard, styles.bottomtabBg]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View
                      style={[
                        styles.namewrapper,
                        styles.growtextbuttonWrapperFlexBox,
                      ]}
                    >
                      <Text style={[styles.nametext, styles.textTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[styles.greetingwrapper, styles.wrapperSpaceBlock]}
                  >
                    <Text style={[styles.greeting, styles.greetingTypo]}>
                      Greeting
                    </Text>
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.uploadimage,
                  styles.growtextbuttonWrapperFlexBox,
                ]}
              >
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="cover"
                  source={require("../assets/defaultimage.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.paymentcontainer}>
            <View style={[styles.paymentrecipt, styles.bottomtabBg]}>
              <View style={styles.frameParent}>
                <View
                  style={[
                    styles.successWrapper,
                    styles.growtextbuttonWrapperFlexBox,
                  ]}
                >
                  <Text style={[styles.success, styles.textTypo]}>Success</Text>
                </View>
                <View
                  style={[styles.modelingKitWrapper, styles.wrapperSpaceBlock]}
                >
                  <Text style={[styles.modelingKit, styles.greetingTypo]}>
                    Modeling Kit
                  </Text>
                </View>
                <View style={[styles.frameGroup, styles.wrapperSpaceBlock]}>
                  <View style={styles.wrapper}>
                    <Text style={[styles.text, styles.textTypo]}>€ 800</Text>
                  </View>
                  <View style={styles.wrapper}>
                    <Text style={[styles.text, styles.textTypo]}>Tax: 7%</Text>
                  </View>
                </View>
              </View>
              <View
                style={[
                  styles.thankYouSoMuchForChoosingWrapper,
                  styles.wrapperSpaceBlock,
                ]}
              >
                <Text style={[styles.thankYouSo, styles.textTypo]}>
                  Thank you so much for choosing us and placing your recent
                  order. We greatly appreciate you trust in our products.
                </Text>
              </View>
              <ImageBackground
                style={styles.boxClosedCopy1}
                resizeMode="contain"
                source={require("../assets/box-closed-copy-1.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.prfilecontainer}>
          <TouchableOpacity
            style={[
              styles.growtextbutton1,
              styles.growtextbuttonWrapperFlexBox,
            ]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseModelingInstruction")}
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
  growtextbuttonWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttontextTypo: {
    color: Color.gray,
    fontFamily: FontFamily.bodySmall,
    textAlign: "center",
    fontSize: FontSize.titleMedium_size,
  },
  bottomtabBg: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  wrapperSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  greetingTypo: {
    color: Color.colorDarkgray,
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
    width: 40,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    justifyContent: "center",
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
    textAlign: "left",
  },
  namewrapper: {
    flexDirection: "row",
  },
  profilenamewtrapper: {
    flexDirection: "row",
  },
  greeting: {
    fontSize: FontSize.bodyMedium_size,
  },
  greetingwrapper: {
    justifyContent: "center",
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
    padding: Padding.p_base,
    overflow: "hidden",
  },
  profilecard: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  success: {
    fontSize: FontSize.displayMedium_size,
    color: Color.colorSuccess,
  },
  successWrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  modelingKit: {
    fontSize: FontSize.headingMediumBold_size,
  },
  modelingKitWrapper: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.headingLarge_size,
    color: Color.colorPrimary,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  frameGroup: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  frameParent: {
    zIndex: 0,
    alignSelf: "stretch",
  },
  thankYouSo: {
    fontSize: FontSize.bodyMedium_size,
    color: Color.colorWhite,
    flex: 1,
  },
  thankYouSoMuchForChoosingWrapper: {
    zIndex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  boxClosedCopy1: {
    position: "absolute",
    top: -99,
    right: 0,
    width: 158,
    height: 148,
    zIndex: 2,
  },
  paymentrecipt: {
    paddingVertical: Padding.p_45xl,
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
    paddingHorizontal: Padding.p_base,
  },
  paymentcontainer: {
    paddingTop: Padding.p_77xl,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
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
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    alignSelf: "stretch",
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
  casemodelingsuccess: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 870,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseModelingSuccess;
