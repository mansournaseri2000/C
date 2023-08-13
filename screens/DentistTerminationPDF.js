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

const DentistTerminationPDF = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.dentistterminationpdf, styles.containerFlexBox]}>
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
                source={require("../assets/arrowleft.png")}
              />
            </Pressable>
            <View style={styles.header1}>
              <Text style={styles.headertext}>Termination</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-1.png")}
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
                  source={require("../assets/defaultimage.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.prfilecontainer}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonSpaceBlock]}
            >
              <Text style={[styles.ghostbuttontext, styles.uploadImageClr]}>
                Download
              </Text>
            </Pressable>
            <View style={[styles.uploadsection, styles.underbtntextFlexBox]}>
              <View style={[styles.pdfcontainer, styles.profilecardLayout]}>
                <ImageBackground
                  style={styles.terminationimageIcon}
                  resizeMode="contain"
                  source={require("../assets/terminationimage.png")}
                />
                <View
                  style={[styles.circleiconbutton, styles.uploadimageFlexBox]}
                >
                  <Image
                    style={styles.arrowLeftIcon}
                    resizeMode="contain"
                    source={require("../assets/paperclip1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.bottombtn, styles.growtextbuttonSpaceBlock]}>
          <TouchableOpacity
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("DentistHome")}
          >
            <Text style={[styles.buttontext, styles.growtextbuttonFlexBox]}>
              Upload Termination
            </Text>
          </TouchableOpacity>
          <View style={[styles.underbtntext, styles.underbtntextFlexBox]}>
            <Text style={styles.suffixtext}>Do you want to upload PDF?</Text>
            <TouchableOpacity
              style={styles.actiontext}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("DentistTermination")}
            >
              <Text style={[styles.uploadImage, styles.uploadImageClr]}>
                Upload Image
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.growtextbuttonSpaceBlock]}>
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
  containerFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  growtextbuttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  profilecardLayout: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
  },
  uploadimageFlexBox: {
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
  },
  growtextbuttonSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  uploadImageClr: {
    color: Color.colorPrimary,
    fontFamily: FontFamily.bodySmall,
  },
  underbtntextFlexBox: {
    paddingHorizontal: Padding.p_base,
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
    padding: Padding.p_5xs,
    flexDirection: "row",
    height: 40,
    width: 40,
    backgroundColor: Color.colorPrimary,
    justifyContent: "center",
    borderRadius: Border.br_mini,
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
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
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
    fontSize: FontSize.bodyMedium_size,
    color: Color.colorDarkgray,
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
    padding: Padding.p_base,
    overflow: "hidden",
  },
  profilecard: {
    backgroundColor: Color.bgBrown,
    padding: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  ghostbuttontext: {
    fontSize: FontSize.titleLarge_size,
    textAlign: "center",
  },
  growtextbutton: {
    borderColor: "#c5ab8e",
    borderWidth: 1,
    borderStyle: "solid",
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: Border.br_mini,
  },
  terminationimageIcon: {
    height: 375,
    alignSelf: "stretch",
  },
  circleiconbutton: {
    backgroundColor: Color.gray,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_21xl,
    marginTop: 8,
    height: 40,
    width: 40,
    flexDirection: "row",
  },
  pdfcontainer: {
    backgroundColor: Color.bgBrown,
    padding: Padding.p_base,
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
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
    textAlign: "center",
  },
  growtextbutton1: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  uploadImage: {
    textAlign: "left",
    fontSize: FontSize.titleMedium_size,
  },
  actiontext: {
    marginLeft: 8,
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
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  dentistterminationpdf: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 983,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default DentistTerminationPDF;
