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

const CaseAlignerPaymentCancel = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.casealignerpaymentcancel}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <Pressable style={[styles.growtextbutton, styles.wrapperFlexBox]}>
              <Text style={[styles.buttontext, styles.buttontextTypo]}>EN</Text>
            </Pressable>
            <View style={[styles.header1, styles.wrapperFlexBox]}>
              <Text style={styles.headertext}>Aligner Payment</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/JplignLogo.png")}
            />
          </View>
          <View style={styles.prfilecontainer}>
            <View style={[styles.profilecard, styles.bottomtabBg]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View style={[styles.namewrapper, styles.wrapperFlexBox]}>
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
              <View style={[styles.uploadimage, styles.wrapperFlexBox]}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="cover"
                  source={require("../assets/ProfileImg.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.paymentcontainer}>
            <View style={[styles.paymentrecipt, styles.bottomtabBg]}>
              <View style={styles.frameParent}>
                <View style={[styles.cancelWrapper, styles.wrapperFlexBox]}>
                  <Text style={[styles.cancel, styles.textTypo]}>Cancel</Text>
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
                source={require("../assets/ProductImg.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.prfilecontainer}>
          <TouchableOpacity
            style={[styles.growtextbutton1, styles.wrapperFlexBox]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseShopDisable")}
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
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttontextTypo: {
    color: Color.gray,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    fontSize: 18,
  },
  bottomtabBg: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: "Poppins-Regular",
  },
  wrapperSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  greetingTypo: {
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    justifyContent: "center",
  },
  headertext: {
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    color: Color.colorWhite,
    fontSize: 24,
    textAlign: "center",
  },
  header1: {
    height: 30,
    paddingHorizontal: 10,
    paddingVertical: 0,
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
    textAlign: "left",
  },
  namewrapper: {
    flexDirection: "row",
  },
  profilenamewtrapper: {
    flexDirection: "row",
  },
  greeting: {
    fontSize: 18,
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
    borderRadius: 50,
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    padding: 16,
    overflow: "hidden",
  },
  profilecard: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  cancel: {
    fontSize: 30,
    color: Color.colorDanger,
  },
  cancelWrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  modelingKit: {
    fontSize: 24,
  },
  modelingKitWrapper: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  text: {
    fontSize: 28,
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
    fontSize: 18,
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
    paddingVertical: 64,
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    paddingHorizontal: 16,
  },
  paymentcontainer: {
    paddingTop: 96,
    paddingHorizontal: 16,
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  casealignerpaymentcancel: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 870,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseAlignerPaymentCancel;
