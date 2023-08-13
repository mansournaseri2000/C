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
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const CaseContractPDF = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.casecontractpdf}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonFlexBox]}
            >
              <Text style={[styles.buttontext, styles.buttontextTypo]}>EN</Text>
            </Pressable>
            <View style={[styles.header1, styles.header1FlexBox]}>
              <Text style={styles.headertext}>Contract</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={styles.prfilecontainer}>
            <View style={[styles.profilecard, styles.profilecardLayout]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View
                      style={[styles.namewrapper, styles.growtextbuttonFlexBox]}
                    >
                      <Text style={[styles.nametext, styles.nametextTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.greetingwrapper,
                      styles.underbtntextSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.greeting, styles.nametextTypo]}>
                      Greeting
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.uploadimage, styles.uploadimageFlexBox]}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="cover"
                  source={require("../assets/defaultimage2.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.prfilecontainer}>
            <Pressable
              style={[styles.growtextbutton1, styles.bottomtabSpaceBlock]}
            >
              <Text style={[styles.ghostbuttontext, styles.uploadImageClr]}>
                Download
              </Text>
            </Pressable>
            <View style={[styles.uploadsection, styles.header1FlexBox]}>
              <View style={[styles.pdfcontainer, styles.profilecardLayout]}>
                <ImageBackground
                  style={styles.contractimageIcon}
                  resizeMode="contain"
                  source={require("../assets/contractimage.png")}
                />
                <View
                  style={[styles.circleiconbutton, styles.uploadimageFlexBox]}
                >
                  <Image
                    style={styles.packagePlusIcon}
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
            style={[styles.growtextbutton2, styles.growtextbuttonFlexBox]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseSimulationSecond")}
          >
            <Text style={[styles.buttontext1, styles.buttontextTypo]}>
              Upload Contract
            </Text>
          </TouchableOpacity>
          <View style={[styles.underbtntext, styles.underbtntextSpaceBlock]}>
            <Text style={[styles.nametext, styles.nametextTypo]}>
              Do you want to upload PDF?
            </Text>
            <TouchableOpacity
              style={styles.actiontext}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("CaseContract")}
            >
              <Text style={[styles.uploadImage, styles.uploadImageClr]}>
                Upload Image
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
  growtextbuttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttontextTypo: {
    color: Color.gray,
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  header1FlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  profilecardLayout: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
  },
  nametextTypo: {
    fontFamily: FontFamily.bodySmall,
    textAlign: "left",
  },
  underbtntextSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  uploadimageFlexBox: {
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomtabSpaceBlock: {
    borderStyle: "solid",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  uploadImageClr: {
    color: Color.colorPrimary,
    fontFamily: FontFamily.bodySmall,
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
    backgroundColor: Color.colorPrimary,
    justifyContent: "center",
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
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    padding: Padding.p_base,
    overflow: "hidden",
  },
  profilecard: {
    padding: Padding.p_5xs,
    backgroundColor: Color.bgBrown,
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
  growtextbutton1: {
    borderColor: "#c5ab8e",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: Border.br_mini,
    borderStyle: "solid",
  },
  contractimageIcon: {
    width: 250,
    height: 375,
  },
  packagePlusIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  circleiconbutton: {
    backgroundColor: Color.gray,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_21xl,
    marginTop: 8,
    flexDirection: "row",
    height: 40,
    width: 40,
  },
  pdfcontainer: {
    backgroundColor: Color.bgBrown,
    padding: Padding.p_base,
    alignItems: "center",
    flex: 1,
  },
  uploadsection: {
    marginTop: 16,
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    flexDirection: "row",
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
  uploadImage: {
    textAlign: "left",
    fontSize: FontSize.titleMedium_size,
  },
  actiontext: {
    marginLeft: 8,
  },
  underbtntext: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: Padding.p_base,
  },
  bottombtn: {
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
    borderColor: "#000",
    borderTopWidth: 5,
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  casecontractpdf: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 983,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseContractPDF;
