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
              source={require("../assets/JplignLogo.png")}
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
                  source={require("../assets/ProfileImg.png")}
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
                    source={require("../assets/Page1Img.png")}
                  />
                  <View
                    style={[styles.uploadwrapper, styles.underbtntextFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/icons/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/icons/camera.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.uploadimage2, styles.camerabtnSpaceBlock]}>
                  <ImageBackground
                    style={styles.page1imageIcon}
                    resizeMode="contain"
                    source={require("../assets/Page2Img.png")}
                  />
                  <View
                    style={[styles.uploadwrapper, styles.underbtntextFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/icons/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/icons/camera.png")}
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
                    source={require("../assets/Page3Img.png")}
                  />
                  <View
                    style={[styles.uploadwrapper, styles.underbtntextFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/icons/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/icons/camera.png")}
                      />
                    </View>
                  </View>
                </View>
                <View style={[styles.uploadimage2, styles.camerabtnSpaceBlock]}>
                  <ImageBackground
                    style={styles.page1imageIcon}
                    resizeMode="contain"
                    source={require("../assets/Page4Img.png")}
                  />
                  <View
                    style={[styles.uploadwrapper, styles.underbtntextFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.packagePlusIcon}
                        resizeMode="contain"
                        source={require("../assets/icons/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
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
  rowFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttontextTypo: {
    color: Color.gray,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  bottomtabFlexBox: {
    backgroundColor: Color.bgBrown,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  nametextTypo: {
    fontFamily: "Poppins-Regular",
    textAlign: "left",
  },
  bottomtabSpaceBlock: {
    borderStyle: "solid",
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  uploadPdfClr: {
    color: Color.colorPrimary,
    fontFamily: "Poppins-Regular",
  },
  uploadimageSpaceBlock: {
    paddingVertical: 16,
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
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
    paddingVertical: 40,
    backgroundColor: Color.gray,
    borderRadius: 50,
    justifyContent: "center",
    height: 40,
    width: 40,
    flexDirection: "row",
  },
  camerabtnSpaceBlock: {
    marginLeft: 16,
    paddingHorizontal: 8,
    alignItems: "center",
  },
  row1SpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  growtextbuttonSpaceBlock: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  buttontext: {
    textAlign: "center",
  },
  growtextbutton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 40,
    width: 40,
    justifyContent: "center",
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    flexDirection: "row",
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
    fontSize: 18,
  },
  namewrapper: {
    flexDirection: "row",
  },
  profilenamewtrapper: {
    flexDirection: "row",
  },
  greeting: {
    fontSize: 18,
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
    borderRadius: 50,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    overflow: "hidden",
  },
  profilecard: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    flexDirection: "row",
  },
  ghostbuttontext: {
    fontSize: 22,
    textAlign: "center",
  },
  growtextbutton1: {
    borderColor: Color.colorPrimary,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 15,
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
    paddingHorizontal: 8,
    alignItems: "center",
  },
  camerabtn: {
    paddingVertical: 40,
    backgroundColor: Color.gray,
    borderRadius: 50,
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
    paddingHorizontal: 8,
    alignItems: "center",
  },
  uploadimage2: {
    paddingVertical: 16,
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 40,
    backgroundColor: Color.colorPrimary,
    justifyContent: "center",
    borderRadius: 15,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  uploadPdf: {
    textAlign: "left",
    fontSize: 18,
  },
  actiontext: {
    marginLeft: 8,
  },
  underbtntext: {
    paddingVertical: 0,
    paddingHorizontal: 16,
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
