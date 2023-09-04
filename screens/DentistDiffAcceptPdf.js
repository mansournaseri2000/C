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
import { Border, Color, Padding, FontFamily, FontSize } from "../GlobalStyles";

const DentistDiffAcceptPdf = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.dentistdiffacceptpdf, styles.containerFlexBox]}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={[styles.container, styles.containerFlexBox]}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <Pressable
              style={[styles.iconbutton, styles.growtextbuttonFlexBox]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.arrowLeftIcon}
                resizeMode="contain"
                source={require("../assets/icons/arrow-left.png")}
              />
            </Pressable>
            <View style={styles.header1}>
              <Text style={styles.headertext}>Acceptance</Text>
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
                    <View
                      style={[
                        styles.suffixwrapper,
                        styles.growtextbuttonFlexBox,
                      ]}
                    >
                      <Text style={styles.suffixtext}>Dr.</Text>
                    </View>
                    <View
                      style={[styles.namewrapper, styles.growtextbuttonFlexBox]}
                    >
                      <Text style={styles.suffixtext}>Fullname</Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.greetingwrapper,
                      styles.growtextbuttonFlexBox,
                    ]}
                  >
                    <Text style={styles.greeting}>Greeting</Text>
                  </View>
                </View>
              </View>
              <View style={[styles.uploadimage, styles.uploadimageFlexBox]}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="contain"
                  source={require("../assets/ProfileImg.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.prfilecontainer}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonSpaceBlock]}
            >
              <Text style={[styles.ghostbuttontext, styles.actiontextClr]}>
                Download
              </Text>
            </Pressable>
            <View style={[styles.uploadsection, styles.underbtntextFlexBox]}>
              <View style={[styles.pdfcontainer, styles.profilecardLayout]}>
                <ImageBackground
                  style={styles.acceptanceimageIcon}
                  resizeMode="contain"
                  source={require("../assets/AcceptanceImg.png")}
                />
                <View
                  style={[styles.circleiconbutton, styles.uploadimageFlexBox]}
                >
                  <Image
                    style={styles.arrowLeftIcon}
                    resizeMode="contain"
                    source={require("../assets/icons/paperclip.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.bottombtn, styles.growtextbuttonSpaceBlock]}>
          <TouchableOpacity
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("DentistDifferList")}
          >
            <Text style={[styles.buttontext, styles.growtextbuttonFlexBox]}>
              Upload Acceptance
            </Text>
          </TouchableOpacity>
          <View style={[styles.underbtntext, styles.underbtntextFlexBox]}>
            <Text style={styles.suffixtext}>Do you want to upload PDF?</Text>
            <Text style={[styles.actiontext, styles.actiontextClr]}>
              Upload Image
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.growtextbuttonSpaceBlock]}>
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
    alignItems: "center",
  },
  growtextbuttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  profilecardLayout: {
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
  },
  uploadimageFlexBox: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  growtextbuttonSpaceBlock: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  actiontextClr: {
    color: Color.colorPrimary,
    fontFamily: "Poppins-Regular",
  },
  underbtntextFlexBox: {
    paddingHorizontal: 16,
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
    padding: 8,
    flexDirection: "row",
    height: 40,
    width: 40,
    backgroundColor: Color.colorPrimary,
    justifyContent: "center",
    borderRadius: 15,
  },
  headertext: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    textAlign: "center",
    color: Color.colorWhite,
  },
  header1: {
    paddingHorizontal: 10,
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
    padding: 16,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  suffixtext: {
    textAlign: "left",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
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
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
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
  ghostbuttontext: {
    fontSize: 22,
    textAlign: "center",
  },
  growtextbutton: {
    borderColor: Color.colorPrimary,
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 15,
  },
  acceptanceimageIcon: {
    width: 250,
    height: 375,
  },
  circleiconbutton: {
    backgroundColor: Color.gray,
    paddingHorizontal: 8,
    paddingVertical: 40,
    marginTop: 8,
    height: 40,
    width: 40,
    flexDirection: "row",
  },
  pdfcontainer: {
    backgroundColor: Color.bgBrown,
    padding: 16,
    alignItems: "center",
    flex: 1,
  },
  uploadsection: {
    marginTop: 16,
    alignSelf: "stretch",
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
  },
  growtextbutton1: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  actiontext: {
    marginLeft: 8,
    textAlign: "left",
    fontSize: 18,
  },
  underbtntext: {
    marginTop: 8,
  },
  bottombtn: {
    alignSelf: "stretch",
    alignItems: "center",
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
    borderColor: "#000",
    borderTopWidth: 5,
    borderStyle: "solid",
    paddingVertical: 8,
    flexDirection: "row",
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  dentistdiffacceptpdf: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 975,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default DentistDiffAcceptPdf;
