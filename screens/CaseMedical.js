import React, { useState } from "react";
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
import Video from "react-native-video";
import {
  RadioGroup as RNKRadioGroup,
  Radio as RNKRadio,
} from "@ui-kitten/components";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CaseMedical = () => {
  const [radioBtnselectedIndex, setRadioBtnselectedIndex] = useState(undefined);
  const navigation = useNavigation();

  return (
    <View style={styles.casemedical}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={[styles.header, styles.headerSpaceBlock]}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonSpaceBlock]}
            >
              <Text style={[styles.buttontext, styles.buttontextTypo]}>EN</Text>
            </Pressable>
            <View style={[styles.header1, styles.header1SpaceBlock]}>
              <Text style={styles.headertext}>Medical Pictures</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={[styles.prfilecontainer, styles.headerSpaceBlock]}>
            <View style={styles.profilecard}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View style={styles.namewrapper}>
                      <Text style={[styles.nametext, styles.nametextTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View style={styles.greetingwrapper}>
                    <Text style={[styles.greeting, styles.greetingClr]}>
                      Greeting
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.uploadimage}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="cover"
                  source={require("../assets/defaultimage.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.uploacontainer, styles.header1SpaceBlock]}>
            <View style={styles.row}>
              <View style={styles.uploadcontainer}>
                <View style={styles.row}>
                  <View style={styles.titilewrapper}>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.labeltext, styles.labelClr]}>
                        Right Side
                      </Text>
                    </View>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.selectivetext, styles.greetingClr]}>
                        Required
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.imagecontainer, styles.row1SpaceBlock]}>
                  <ImageBackground
                    style={styles.sampleimageIcon}
                    resizeMode="contain"
                    source={require("../assets/sampleimage.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/camera.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.uploadcontainer1}>
                <View style={styles.row}>
                  <View style={styles.titilewrapper}>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.labeltext, styles.labelClr]}>
                        Left Side
                      </Text>
                    </View>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.selectivetext, styles.greetingClr]}>
                        Required
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.imagecontainer, styles.row1SpaceBlock]}>
                  <ImageBackground
                    style={styles.sampleimageIcon}
                    resizeMode="contain"
                    source={require("../assets/sampleimage.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/camera.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.row1, styles.row1SpaceBlock]}>
              <View style={styles.uploadcontainer}>
                <View style={styles.row}>
                  <View style={styles.titilewrapper}>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.labeltext, styles.labelClr]}>
                        Label
                      </Text>
                    </View>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.selectivetext, styles.greetingClr]}>
                        Required
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.imagecontainer, styles.row1SpaceBlock]}>
                  <ImageBackground
                    style={styles.sampleimageIcon}
                    resizeMode="contain"
                    source={require("../assets/sampleimage.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/camera.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.uploadcontainer1}>
                <View style={styles.row}>
                  <View style={styles.titilewrapper}>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.labeltext, styles.labelClr]}>
                        Label
                      </Text>
                    </View>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.selectivetext, styles.greetingClr]}>
                        Required
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.imagecontainer, styles.row1SpaceBlock]}>
                  <ImageBackground
                    style={styles.sampleimageIcon}
                    resizeMode="contain"
                    source={require("../assets/sampleimage.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/camera.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.row1, styles.row1SpaceBlock]}>
              <View style={styles.uploadcontainer}>
                <View style={styles.row}>
                  <View style={styles.titilewrapper}>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.labeltext, styles.labelClr]}>
                        Label
                      </Text>
                    </View>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.selectivetext, styles.greetingClr]}>
                        Required
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.imagecontainer, styles.row1SpaceBlock]}>
                  <ImageBackground
                    style={styles.sampleimageIcon}
                    resizeMode="contain"
                    source={require("../assets/sampleimage.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/camera.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.uploadcontainer1}>
                <View style={styles.row}>
                  <View style={styles.titilewrapper}>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.labeltext, styles.labelClr]}>
                        Label
                      </Text>
                    </View>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.selectivetext, styles.greetingClr]}>
                        Required
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.imagecontainer, styles.row1SpaceBlock]}>
                  <ImageBackground
                    style={styles.sampleimageIcon}
                    resizeMode="contain"
                    source={require("../assets/sampleimage.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/camera.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.row1, styles.row1SpaceBlock]}>
              <View style={styles.uploadcontainer}>
                <View style={styles.row}>
                  <View style={styles.titilewrapper}>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.labeltext, styles.labelClr]}>
                        Label
                      </Text>
                    </View>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.selectivetext, styles.greetingClr]}>
                        Required
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.imagecontainer, styles.row1SpaceBlock]}>
                  <ImageBackground
                    style={styles.sampleimageIcon}
                    resizeMode="contain"
                    source={require("../assets/sampleimage.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/camera.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.uploadcontainer1}>
                <View style={styles.row}>
                  <View style={styles.titilewrapper}>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.labeltext, styles.labelClr]}>
                        Label
                      </Text>
                    </View>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.selectivetext, styles.greetingClr]}>
                        Required
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.imagecontainer, styles.row1SpaceBlock]}>
                  <ImageBackground
                    style={styles.sampleimageIcon}
                    resizeMode="contain"
                    source={require("../assets/sampleimage.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/camera.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.row1, styles.row1SpaceBlock]}>
              <View style={styles.uploadcontainer}>
                <View style={styles.row}>
                  <View style={styles.titilewrapper}>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.labeltext, styles.labelClr]}>
                        Label
                      </Text>
                    </View>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.selectivetext, styles.greetingClr]}>
                        Optional
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.imagecontainer, styles.row1SpaceBlock]}>
                  <ImageBackground
                    style={styles.sampleimageIcon}
                    resizeMode="contain"
                    source={require("../assets/sampleimage.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/camera.png")}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.uploadcontainer1}>
                <View style={styles.row}>
                  <View style={styles.titilewrapper}>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.labeltext, styles.labelClr]}>
                        Label
                      </Text>
                    </View>
                    <View style={styles.labelwrapper}>
                      <Text style={[styles.selectivetext, styles.greetingClr]}>
                        Optional
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.imagecontainer, styles.row1SpaceBlock]}>
                  <ImageBackground
                    style={styles.sampleimageIcon}
                    resizeMode="contain"
                    source={require("../assets/sampleimage.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/camera.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.infocontainer, styles.headerSpaceBlock]}>
            <View style={styles.video}>
              <View style={styles.inputgroup}>
                <View
                  style={[styles.inputiconwrapper, styles.growtextbuttonLayout]}
                >
                  <Image
                    style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                    resizeMode="contain"
                    source={require("../assets/packageplus16.png")}
                  />
                </View>
                <Text style={[styles.label, styles.labelTypo]}>
                  Medical Pictures
                </Text>
              </View>
              <View style={styles.videoinfowrapper}>
                <Text style={[styles.videoinfotext, styles.nametextTypo]}>
                  Please watch the following video carefully before sending any
                  pictures or videos so that you can choose the best angles for
                  photographing the face.
                </Text>
              </View>
              <View style={styles.videocoverwrapper}>
                <Video
                  style={styles.video1}
                  volume={1}
                  controls={true}
                  source={{ uri: "undefined" }}
                  resizeMode="contain"
                />
              </View>
            </View>
            {/* <View style={styles.acceptancewrapper}>
              <RNKRadioGroup
                style={[styles.radiobtn, styles.radiobtnLayout]}
                selectedIndex={radioBtnselectedIndex}
                onChange={setRadioBtnselectedIndex}
              >
                <RNKRadio status="warning">
                  {() => (
                    <Text style={styles.radioBtnText}> AcceptCondition</Text>
                  )}
                </RNKRadio>
              </RNKRadioGroup>
              <Text style={[styles.acceptancetext, styles.labelTypo]}>
                Do you send back your modeling kit?
              </Text>
            </View> */}
          </View>
        </View>
        <View style={[styles.prfilecontainer, styles.headerSpaceBlock]}>
          <TouchableOpacity
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseSutable")}
          >
            <Text style={[styles.buttontext1, styles.buttontextTypo]}>
              Next
            </Text>
          </TouchableOpacity>
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
  radioBtnText: {},
  headerSpaceBlock: {
    padding: Padding.p_base,
    alignSelf: "stretch",
  },
  growtextbuttonSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
  },
  buttontextTypo: {
    color: Color.gray,
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  header1SpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  nametextTypo: {
    fontSize: FontSize.titleMedium_size,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.bodySmall,
  },
  greetingClr: {
    color: Color.colorDarkgray,
    fontFamily: FontFamily.bodySmall,
  },
  labelClr: {
    color: Color.colorPrimary,
    flex: 1,
  },
  row1SpaceBlock: {
    marginTop: 16,
    alignSelf: "stretch",
  },
  radiobtnLayout: {
    height: 24,
    width: 24,
  },
  camerabtnLayout: {
    paddingVertical: Padding.p_21xl,
    backgroundColor: Color.gray,
    paddingHorizontal: Padding.p_5xs,
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    height: 40,
    width: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  growtextbuttonLayout: {
    width: 40,
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    alignItems: "center",
  },
  labelTypo: {
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  buttontext: {
    textAlign: "center",
  },
  growtextbutton: {
    justifyContent: "center",
    height: 40,
    width: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    alignItems: "center",
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
    justifyContent: "center",
    flexDirection: "row",
  },
  headerChild: {
    width: 50,
    height: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nametext: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.bodySmall,
  },
  namewrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  profilenamewtrapper: {
    flexDirection: "row",
  },
  greeting: {
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
  },
  greetingwrapper: {
    marginTop: 8,
    justifyContent: "center",
    flexDirection: "row",
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
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    padding: Padding.p_base,
    alignItems: "center",
    overflow: "hidden",
  },
  profilecard: {
    padding: Padding.p_5xs,
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    alignItems: "center",
  },
  labeltext: {
    fontSize: FontSize.bodyMedium_size,
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
  },
  labelwrapper: {
    borderRadius: Border.br_xs,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  selectivetext: {
    fontSize: FontSize.bodySmall_size,
    textAlign: "center",
    flex: 1,
  },
  titilewrapper: {
    alignItems: "center",
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
  },
  sampleimageIcon: {
    borderRadius: Border.br_8xs,
    width: 104,
    height: 70,
  },
  imagecontainer: {
    justifyContent: "center",
    borderRadius: Border.br_mini,
    marginTop: 16,
    alignItems: "center",
  },
  packagePlusIcon: {
    overflow: "hidden",
  },
  camerabtn: {
    marginLeft: 16,
  },
  uploadwrapper: {
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
    alignItems: "center",
  },
  uploadcontainer: {
    padding: Padding.p_5xs,
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    overflow: "hidden",
    flex: 1,
  },
  uploadcontainer1: {
    marginLeft: 16,
    padding: Padding.p_5xs,
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    overflow: "hidden",
    flex: 1,
  },
  row1: {
    flexDirection: "row",
  },
  uploacontainer: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  inputiconwrapper: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
  },
  label: {
    color: Color.colorPrimary,
    flex: 1,
  },
  inputgroup: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  videoinfotext: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.bodySmall,
    flex: 1,
  },
  videoinfowrapper: {
    paddingBottom: Padding.p_5xs,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  video1: {
    height: "100%",
    width: "100%",
  },
  videocoverwrapper: {
    padding: Padding.p_5xs,
    alignSelf: "stretch",
    alignItems: "center",
  },
  video: {
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  radiobtn: {
    borderRadius: Border.br_81xl,
  },
  acceptancetext: {
    color: Color.colorWhite,
  },
  acceptancewrapper: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  infocontainer: {
    justifyContent: "center",
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
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_mini,
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
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 5,
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  casemedical: {
    backgroundColor: Color.bgBlack,
    height: 1788,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default CaseMedical;
