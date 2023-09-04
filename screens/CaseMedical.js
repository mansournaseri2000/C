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
              source={require("../assets/JplignLogo.png")}
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
                  source={require("../assets/ProfileImg.png")}
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
                    source={require("../assets/SmileImg.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/camera.png")}
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
                    source={require("../assets/SmileImg.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/camera.png")}
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
                    source={require("../assets/SmileImg.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/camera.png")}
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
                    source={require("../assets/SmileImg.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/camera.png")}
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
                    source={require("../assets/SmileImg.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/camera.png")}
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
                    source={require("../assets/SmileImg.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/camera.png")}
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
                    source={require("../assets/SmileImg.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/camera.png")}
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
                    source={require("../assets/SmileImg.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/camera.png")}
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
                    source={require("../assets/SmileImg.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/camera.png")}
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
                    source={require("../assets/SmileImg.png")}
                  />
                </View>
                <View style={[styles.uploadwrapper, styles.row1SpaceBlock]}>
                  <View style={styles.camerabtnLayout}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/image.png")}
                    />
                  </View>
                  <View style={[styles.camerabtn, styles.camerabtnLayout]}>
                    <Image
                      style={[styles.packagePlusIcon, styles.radiobtnLayout]}
                      resizeMode="contain"
                      source={require("../assets/icons/camera.png")}
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
                    source={require("../assets/icons/film.png")}
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
  radioBtnText: {},
  headerSpaceBlock: {
    padding: 16,
    alignSelf: "stretch",
  },
  growtextbuttonSpaceBlock: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
  },
  buttontextTypo: {
    color: Color.gray,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  header1SpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  nametextTypo: {
    fontSize: 18,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: "Poppins-Regular",
  },
  greetingClr: {
    color: Color.colorDarkgray,
    fontFamily: "Poppins-Regular",
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
    paddingVertical: 40,
    backgroundColor: Color.gray,
    paddingHorizontal: 8,
    borderRadius: 50,
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
    borderRadius: 15,
    alignItems: "center",
  },
  labelTypo: {
    marginLeft: 8,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
    fontSize: 18,
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
    borderRadius: 15,
    alignItems: "center",
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
    fontFamily: "Poppins-Regular",
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
    fontSize: 18,
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
    borderRadius: 50,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
    overflow: "hidden",
  },
  profilecard: {
    padding: 8,
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    alignItems: "center",
  },
  labeltext: {
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Poppins-Regular",
  },
  labelwrapper: {
    borderRadius: 12,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  selectivetext: {
    fontSize: 16,
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
    borderRadius: 5,
    width: 104,
    height: 70,
  },
  imagecontainer: {
    justifyContent: "center",
    borderRadius: 15,
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
    padding: 8,
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
    overflow: "hidden",
    flex: 1,
  },
  uploadcontainer1: {
    marginLeft: 16,
    padding: 8,
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
    overflow: "hidden",
    flex: 1,
  },
  row1: {
    flexDirection: "row",
  },
  uploacontainer: {
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  inputiconwrapper: {
    padding: 8,
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
  },
  label: {
    color: Color.colorPrimary,
    flex: 1,
  },
  inputgroup: {
    padding: 8,
    borderRadius: 12,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  videoinfotext: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: "Poppins-Regular",
    flex: 1,
  },
  videoinfowrapper: {
    paddingBottom: 8,
    paddingHorizontal: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  video1: {
    height: "100%",
    width: "100%",
  },
  videocoverwrapper: {
    padding: 8,
    alignSelf: "stretch",
    alignItems: "center",
  },
  video: {
    backgroundColor: Color.bgBrown,
    borderRadius: 12,
    alignSelf: "stretch",
  },
  radiobtn: {
    borderRadius: 100,
  },
  acceptancetext: {
    color: Color.colorWhite,
  },
  acceptancewrapper: {
    padding: 8,
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
    paddingVertical: 8,
    borderRadius: 15,
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
