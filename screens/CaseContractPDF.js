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
              source={require("../assets/JplignLogo.png")}
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
                  source={require("../assets/ProfileImg.png")}
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
                  source={require("../assets/ContractImg.png")}
                />
                <View
                  style={[styles.circleiconbutton, styles.uploadimageFlexBox]}
                >
                  <Image
                    style={styles.packagePlusIcon}
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
  growtextbuttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttontextTypo: {
    color: Color.gray,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  header1FlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  profilecardLayout: {
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
  },
  nametextTypo: {
    fontFamily: "Poppins-Regular",
    textAlign: "left",
  },
  underbtntextSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  uploadimageFlexBox: {
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomtabSpaceBlock: {
    borderStyle: "solid",
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  uploadImageClr: {
    color: Color.colorPrimary,
    fontFamily: "Poppins-Regular",
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
    backgroundColor: Color.colorPrimary,
    justifyContent: "center",
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
    padding: 16,
    overflow: "hidden",
  },
  profilecard: {
    padding: 8,
    backgroundColor: Color.bgBrown,
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
  growtextbutton1: {
    borderColor: Color.colorPrimary,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderRadius: 15,
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
    paddingHorizontal: 8,
    paddingVertical: 40,
    marginTop: 8,
    flexDirection: "row",
    height: 40,
    width: 40,
  },
  pdfcontainer: {
    backgroundColor: Color.bgBrown,
    padding: 16,
    alignItems: "center",
    flex: 1,
  },
  uploadsection: {
    marginTop: 16,
    paddingHorizontal: 16,
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 40,
    backgroundColor: Color.colorPrimary,
    justifyContent: "center",
    borderRadius: 15,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  uploadImage: {
    textAlign: "left",
    fontSize: 18,
  },
  actiontext: {
    marginLeft: 8,
  },
  underbtntext: {
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
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
