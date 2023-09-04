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
import { Border, Color, FontFamily, Padding, FontSize } from "../GlobalStyles";

const DentistPaymentSuccess = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.dentistpaymentsuccess, styles.containerFlexBox]}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={[styles.container, styles.containerFlexBox]}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <Pressable
              style={[styles.iconbutton, styles.wrapperFlexBox]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.arrowLeftIcon}
                resizeMode="contain"
                source={require("../assets/icons/arrow-left.png")}
              />
            </Pressable>
            <View style={[styles.header1, styles.wrapperFlexBox]}>
              <Text style={styles.headertext}>Difference Payment</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/JplignLogo.png")}
            />
          </View>
          <View style={styles.prfilecontainer}>
            <View style={[styles.profilecard, styles.profilecardLayout]}>
              <View>
                <View>
                  <View style={styles.profilenamewtrapper}>
                    <View style={[styles.suffixwrapper, styles.wrapperFlexBox]}>
                      <Text style={[styles.suffixtext, styles.textTypo]}>
                        Dr.
                      </Text>
                    </View>
                    <View style={[styles.namewrapper, styles.wrapperFlexBox]}>
                      <Text style={[styles.suffixtext, styles.textTypo]}>
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
                  resizeMode="contain"
                  source={require("../assets/ProfileImg.png")}
                />
              </View>
            </View>
          </View>
          <View
            style={[styles.paymentcontainer, styles.paymentreciptSpaceBlock]}
          >
            <View
              style={[styles.paymentrecipt, styles.paymentreciptSpaceBlock]}
            >
              <View style={styles.frameParent}>
                <View style={[styles.successWrapper, styles.wrapperFlexBox]}>
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
                source={require("../assets/ProductImg.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.prfilecontainer}>
          <TouchableOpacity
            style={[styles.growtextbutton, styles.bottomtabSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("DentistDifferList")}
          >
            <Text style={styles.buttontext}>Back</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.bottomtabSpaceBlock]}>
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
  containerFlexBox: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  wrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  profilecardLayout: {
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
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
  paymentreciptSpaceBlock: {
    paddingHorizontal: 16,
    alignSelf: "stretch",
  },
  bottomtabSpaceBlock: {
    paddingVertical: 8,
    paddingHorizontal: 16,
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
    width: 40,
    padding: 8,
    flexDirection: "row",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    justifyContent: "center",
  },
  headertext: {
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    color: Color.colorWhite,
    fontSize: 24,
  },
  header1: {
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
  suffixtext: {
    fontSize: 18,
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
    fontSize: 18,
  },
  greetingwrapper: {
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: Color.bgBrown,
    padding: 8,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: 16,
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
    fontSize: 24,
    color: Color.colorDarkgray,
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
    textAlign: "left",
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
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
  },
  paymentcontainer: {
    paddingTop: 96,
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
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  growtextbutton: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
  },
  container: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
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
  dentistpaymentsuccess: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 870,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default DentistPaymentSuccess;
