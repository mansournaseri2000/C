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

const CaseContract = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.casecontract}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={[styles.header, styles.headerFlexBox]}>
            <Pressable style={[styles.growtextbutton, styles.rowFlexBox]}>
              <Text style={[styles.buttontext, styles.buttontextTypo]}>EN</Text>
            </Pressable>
            <View style={[styles.header1, styles.rowFlexBox]}>
              <Text style={styles.headertext}>Contract</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={styles.headerFlexBox}>
            <View style={[styles.profilecard, styles.bottomtabFlexBox]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View style={[styles.namewrapper, styles.rowFlexBox]}>
                      <Text style={[styles.nametext, styles.nametextTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View style={styles.underbtntextFlexBox}>
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
                  source={require("../assets/defaultimage2.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.headerFlexBox}>
            <Pressable
              style={[styles.growtextbutton1, styles.bottomtabSpaceBlock]}
            >
              <Text style={[styles.ghostbuttontext, styles.uploadPdfClr]}>
                Download
              </Text>
            </Pressable>
            <View style={styles.row1SpaceBlock}>
              <View style={[styles.row, styles.rowFlexBox]}>
                <View
                  style={[styles.uploadimage1, styles.uploadimageSpaceBlock]}
                >
                  <ImageBackground
                    style={styles.page1imageIcon}
                    resizeMode="cover"
                    source={require("../assets/page1image.png")}
                  />
                  <View
                    style={[styles.uploadwrapper, styles.underbtntextFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/camera.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.uploadimage2, styles.camerabtnSpaceBlock]}>
                  <ImageBackground
                    style={styles.page1imageIcon}
                    resizeMode="contain"
                    source={require("../assets/page2image.png")}
                  />
                  <View
                    style={[styles.uploadwrapper, styles.underbtntextFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/camera.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
              <View style={[styles.row1, styles.row1SpaceBlock]}>
                <View
                  style={[styles.uploadimage1, styles.uploadimageSpaceBlock]}
                >
                  <ImageBackground
                    style={styles.page1imageIcon}
                    resizeMode="cover"
                    source={require("../assets/page3image.png")}
                  />
                  <View
                    style={[styles.uploadwrapper, styles.underbtntextFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/camera.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.uploadimage2, styles.camerabtnSpaceBlock]}>
                  <ImageBackground
                    style={styles.page1imageIcon}
                    resizeMode="contain"
                    source={require("../assets/page4image.png")}
                  />
                  <View
                    style={[styles.uploadwrapper, styles.underbtntextFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/camera.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.bottombtn, styles.growtextbuttonSpaceBlock]}>
          <TouchableOpacity
            style={[styles.growtextbutton2, styles.rowFlexBox]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseSimulationSecond")}
          >
            <Text style={[styles.buttontext1, styles.buttontextTypo]}>
              Upload Contract
            </Text>
          </TouchableOpacity>
          <View style={[styles.underbtntext, styles.underbtntextFlexBox]}>
            <Text style={[styles.nametext, styles.nametextTypo]}>
              Do you want to upload PDF?
            </Text>
            <TouchableOpacity
              style={styles.actiontext}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("CaseContractPDF")}
            >
              <Text style={[styles.uploadPdf, styles.uploadPdfClr]}>
                Upload PDF
              </Text>
            </TouchableOpacity>
          </View>
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
          source={require("../assets/youtube3.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/info3.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/condition2.png")}
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
  rowFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttontextTypo: {
    color: Color.gray,
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  bottomtabFlexBox: {
    backgroundColor: Color.bgBrown,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  nametextTypo: {
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  bottomtabSpaceBlock: {
    borderStyle: "solid",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  uploadPdfClr: {
    color: Color.colorPrimary,
    fontFamily: FontFamily.bodySmall,
  },
  uploadimageSpaceBlock: {
    paddingVertical: Padding.p_base,
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    overflow: "hidden",
    flex: 1,
  },
  underbtntextFlexBox: {
    marginTop: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  camerabtnLayout: {
    paddingVertical: Padding.p_21xl,
    backgroundColor: Color.gray,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    height: 40,
    width: 40,
    flexDirection: "row",
  },
  camerabtnSpaceBlock: {
    marginLeft: 16,
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
  },
  row1SpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  growtextbuttonSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  buttontext: {
    textAlign: "center",
  },
  growtextbutton: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
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
    color: Color.colorWhite,
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nametext: {
    textAlign: "left",
    color: Color.colorWhite,
    fontSize: FontSize.titleMedium_size,
  },
  namewrapper: {
    flexDirection: "row",
  },
  profilenamewtrapper: {
    flexDirection: "row",
  },
  greeting: {
    fontSize: FontSize.bodyMedium_size,
    color: Color.colorDarkgray,
    textAlign: "left",
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
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    padding: Padding.p_base,
    alignItems: "center",
    overflow: "hidden",
  },
  profilecard: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
    flexDirection: "row",
  },
  ghostbuttontext: {
    fontSize: FontSize.titleLarge_size,
    textAlign: "center",
  },
  growtextbutton1: {
    borderColor: "#c5ab8e",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: Border.br_mini,
    borderStyle: "solid",
  },
  page1imageIcon: {
    height: 150,
    alignSelf: "stretch",
  },
  packagePlusIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  gallerybtn: {
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
  },
  camerabtn: {
    paddingVertical: Padding.p_21xl,
    backgroundColor: Color.gray,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    height: 40,
    width: 40,
    flexDirection: "row",
  },
  uploadwrapper: {
    height: 40,
    alignSelf: "stretch",
  },
  uploadimage1: {
    paddingHorizontal: Padding.p_5xs,
    alignItems: "center",
  },
  uploadimage2: {
    paddingVertical: Padding.p_base,
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    overflow: "hidden",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  row1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
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
  growtextbutton2: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    height: 40,
    backgroundColor: Color.colorPrimary,
    justifyContent: "center",
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  uploadPdf: {
    textAlign: "left",
    fontSize: FontSize.titleMedium_size,
  },
  actiontext: {
    marginLeft: 8,
  },
  underbtntext: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    marginTop: 8,
  },
  bottombtn: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  container: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    alignItems: "center",
    flex: 1,
  },
  youtubeIcon: {
    overflow: "hidden",
  },
  bottomtab: {
    borderColor: "#000",
    borderTopWidth: 5,
    backgroundColor: Color.bgBrown,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  casecontract: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 983,
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseContract;
