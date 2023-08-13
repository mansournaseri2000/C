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

const DentistDiffAccept = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.dentistdiffaccept, styles.containerFlexBox]}>
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
                source={require("../assets/arrowleft.png")}
              />
            </Pressable>
            <View style={styles.header1}>
              <Text style={styles.headertext}>Acceptance</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-1.png")}
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
                  source={require("../assets/defaultimage.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.headerFlexBox}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonSpaceBlock]}
            >
              <Text style={[styles.ghostbuttontext, styles.actiontextClr]}>
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
                    style={[styles.uploadwrapper, styles.uploadwrapperFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.arrowLeftIcon}
                        resizeMode="contain"
                        source={require("../assets/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.arrowLeftIcon}
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
                    style={[styles.uploadwrapper, styles.uploadwrapperFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.arrowLeftIcon}
                        resizeMode="contain"
                        source={require("../assets/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.arrowLeftIcon}
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
                    style={[styles.uploadwrapper, styles.uploadwrapperFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.arrowLeftIcon}
                        resizeMode="contain"
                        source={require("../assets/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.arrowLeftIcon}
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
                    style={[styles.uploadwrapper, styles.uploadwrapperFlexBox]}
                  >
                    <View style={[styles.gallerybtn, styles.camerabtnLayout]}>
                      <Image
                        style={styles.arrowLeftIcon}
                        resizeMode="contain"
                        source={require("../assets/image.png")}
                      />
                    </View>
                    <View
                      style={[styles.camerabtn, styles.camerabtnSpaceBlock]}
                    >
                      <Image
                        style={styles.arrowLeftIcon}
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
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("DentistDifferList")}
          >
            <Text style={[styles.buttontext, styles.rowFlexBox]}>
              Upload Acceptance
            </Text>
          </TouchableOpacity>
          <View style={styles.underbtntext}>
            <Text style={styles.suffixtext}>Do you want to upload PDF?</Text>
            <Text style={[styles.actiontext, styles.actiontextClr]}>
              Upload PDF
            </Text>
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
  headerFlexBox: {
    padding: Padding.p_base,
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
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  actiontextClr: {
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
  uploadwrapperFlexBox: {
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
    width: 40,
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    flexDirection: "row",
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
    flexDirection: "row",
    justifyContent: "space-between",
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
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
    padding: Padding.p_5xs,
    flexDirection: "row",
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
  page1imageIcon: {
    height: 150,
    alignSelf: "stretch",
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
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  actiontext: {
    marginLeft: 8,
    textAlign: "left",
    fontSize: FontSize.titleMedium_size,
  },
  underbtntext: {
    paddingHorizontal: Padding.p_base,
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
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.bgBrown,
    justifyContent: "space-between",
    alignSelf: "stretch",
  },
  dentistdiffaccept: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 983,
    alignItems: "center",
    overflow: "hidden",
  },
});

export default DentistDiffAccept;
