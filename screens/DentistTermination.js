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
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const DentistTermination = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.dentisttermination, styles.containerFlexBox]}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={[styles.container, styles.containerFlexBox]}>
        <View style={styles.maincontainer}>
          <View style={[styles.header, styles.headerFlexBox]}>
            <Pressable
              style={[styles.iconbutton, styles.rowFlexBox]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.arrowLeftIcon}
                resizeMode="contain"
                source={require("../assets/icons/arrow-left.png")}
              />
            </Pressable>
            <View style={styles.header1}>
              <Text style={styles.headertext}>Termination</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/JplignLogo.png")}
            />
          </View>
          <View style={styles.headerFlexBox}>
            <View style={[styles.profilecard, styles.bottomtabFlexBox]}>
              <View>
                <View>
                  <View style={styles.profilenamewtrapper}>
                    <View style={[styles.suffixwrapper, styles.rowFlexBox]}>
                      <Text style={styles.suffixtext}>Dr.</Text>
                    </View>
                    <View style={[styles.namewrapper, styles.rowFlexBox]}>
                      <Text style={styles.suffixtext}>Fullname</Text>
                    </View>
                  </View>
                  <View style={styles.uploadwrapperFlexBox}>
                    <Text style={styles.greeting}>Greeting</Text>
                  </View>
                </View>
              </View>
              <View style={styles.uploadimage}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="contain"
                  source={require("../assets/ProfileImg.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.headerFlexBox}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonSpaceBlock]}
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
                    style={[styles.uploadwrapper, styles.uploadwrapperFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.arrowLeftIcon}
                        resizeMode="contain"
                        source={require("../assets/icons/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.arrowLeftIcon}
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
                    style={[styles.uploadwrapper, styles.uploadwrapperFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.arrowLeftIcon}
                        resizeMode="contain"
                        source={require("../assets/icons/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.arrowLeftIcon}
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
                    style={[styles.uploadwrapper, styles.uploadwrapperFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.arrowLeftIcon}
                        resizeMode="contain"
                        source={require("../assets/icons/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.arrowLeftIcon}
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
                    style={[styles.uploadwrapper, styles.uploadwrapperFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.arrowLeftIcon}
                        resizeMode="contain"
                        source={require("../assets/icons/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.arrowLeftIcon}
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
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("DentistHome")}
          >
            <Text style={[styles.buttontext, styles.rowFlexBox]}>
              Upload Termination
            </Text>
          </TouchableOpacity>
          <View style={styles.underbtntext}>
            <Text style={styles.suffixtext}>Do you want to upload PDF?</Text>
            <TouchableOpacity
              style={styles.actiontext}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("DentistTerminationPDF")}
            >
              <Text style={[styles.uploadPdf, styles.uploadPdfClr]}>
                Upload PDF
              </Text>
            </TouchableOpacity>
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
  headerFlexBox: {
    padding: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  rowFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  bottomtabFlexBox: {
    backgroundColor: Color.bgBrown,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  growtextbuttonSpaceBlock: {
    paddingVertical: 8,
    paddingHorizontal: 16,
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
  uploadwrapperFlexBox: {
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
    width: 40,
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    flexDirection: "row",
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
    flexDirection: "row",
    justifyContent: "space-between",
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
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    padding: 8,
    flexDirection: "row",
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
  page1imageIcon: {
    height: 150,
    alignSelf: "stretch",
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
    paddingVertical: 8,
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
    paddingHorizontal: 16,
    marginTop: 8,
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  bottombtn: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  container: {
    justifyContent: "space-between",
    alignSelf: "stretch",
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
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  dentisttermination: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 966,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default DentistTermination;
