import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const CaseSutable = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.casesutable}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonFlexBox]}
            >
              <Text style={styles.buttontextTypo}>EN</Text>
            </Pressable>
            <View style={[styles.header1, styles.growtextbuttonFlexBox]}>
              <Text style={styles.headertext}>Sutable</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/JplignLogo.png")}
            />
          </View>
          <View style={styles.prfilecontainer}>
            <View style={[styles.profilecard, styles.profilecardSpaceBlock]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View
                      style={[styles.namewrapper, styles.growtextbuttonFlexBox]}
                    >
                      <Text style={styles.nametextTypo}>Fullname</Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.greetingwrapper,
                      styles.growtextbuttonFlexBox,
                    ]}
                  >
                    <Text style={[styles.greeting, styles.greetingTypo]}>
                      Greeting
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.uploadimage, styles.growtextbuttonFlexBox]}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="cover"
                  source={require("../assets/ProfileImg.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.radioquestion, styles.frameParentSpaceBlock]}>
            <View style={[styles.radioquwrapper, styles.profilecardSpaceBlock]}>
              <View style={[styles.iconwrapper, styles.profilecardSpaceBlock]}>
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/help-circle.png")}
                />
              </View>
              <View style={styles.radioquwrapper1}>
                <Text style={[styles.radiotext, styles.greetingTypo]}>
                  What misaligned teeth do you suffer from?
                </Text>
              </View>
            </View>
            <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
              <View style={styles.rectangleParent}>
                <View style={styles.frameChildLayout} />
                <Text style={[styles.crowding, styles.nametextTypo]}>
                  Crowding
                </Text>
              </View>
              <View style={styles.rectangleGroup}>
                <View style={styles.frameChildLayout} />
                <Text style={[styles.crowding, styles.nametextTypo]}>Gaps</Text>
              </View>
              <View style={styles.rectangleGroup}>
                <View style={styles.frameChildLayout} />
                <Text style={[styles.crowding, styles.nametextTypo]}>
                  Crookedness
                </Text>
              </View>
            </View>
          </View>
          <View style={[styles.radioquestion, styles.frameParentSpaceBlock]}>
            <View style={[styles.radioquwrapper, styles.profilecardSpaceBlock]}>
              <View style={[styles.iconwrapper, styles.profilecardSpaceBlock]}>
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/help-circle.png")}
                />
              </View>
              <View style={styles.radioquwrapper1}>
                <Text style={[styles.radiotext, styles.greetingTypo]}>
                  How bad do you think your misaligned teeth are?
                </Text>
              </View>
            </View>
            <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
              <View style={styles.rectangleParent}>
                <View style={styles.frameChildLayout} />
                <Text style={[styles.crowding, styles.nametextTypo]}>1-3</Text>
              </View>
              <View style={styles.rectangleGroup}>
                <View style={styles.frameChildLayout} />
                <Text style={[styles.crowding, styles.nametextTypo]}>4-6</Text>
              </View>
              <View style={styles.rectangleGroup}>
                <View style={styles.frameChildLayout} />
                <Text style={[styles.crowding, styles.nametextTypo]}>7-10</Text>
              </View>
            </View>
          </View>
          <View style={[styles.radioquestion, styles.frameParentSpaceBlock]}>
            <View style={[styles.radioquwrapper, styles.profilecardSpaceBlock]}>
              <View style={[styles.iconwrapper, styles.profilecardSpaceBlock]}>
                <Image
                  style={styles.packagePlusIcon}
                  resizeMode="contain"
                  source={require("../assets/icons/help-circle.png")}
                />
              </View>
              <View style={styles.radioquwrapper1}>
                <Text style={[styles.radiotext, styles.greetingTypo]}>
                  Have you ever worn braces?
                </Text>
              </View>
            </View>
            <View style={[styles.frameParent, styles.frameParentSpaceBlock]}>
              <View style={styles.rectangleParent}>
                <View style={styles.frameChildLayout} />
                <Text style={[styles.crowding, styles.nametextTypo]}>Yes</Text>
              </View>
              <View style={styles.rectangleGroup}>
                <View style={styles.frameChildLayout} />
                <Text style={[styles.crowding, styles.nametextTypo]}>No</Text>
              </View>
              <View style={styles.rectangleParent5}>
                <View style={[styles.frameChild5, styles.frameChildLayout]} />
                <Text style={[styles.crowding, styles.nametextTypo]}>
                  Crookedness
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.prfilecontainer}>
          <TouchableOpacity
            style={[styles.growtextbutton1, styles.growtextbuttonFlexBox]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseDoctorOpinion")}
          >
            <Text style={[styles.buttontext1, styles.buttontextTypo]}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.bottomtabBg]}>
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
  profilecardSpaceBlock: {
    padding: 8,
    flexDirection: "row",
  },
  greetingTypo: {
    fontSize: 18,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
  },
  frameParentSpaceBlock: {
    paddingHorizontal: 16,
    alignSelf: "stretch",
  },
  nametextTypo: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  frameChildLayout: {
    height: 22,
    backgroundColor: Color.colorDarkgray,
    borderRadius: 100,
    width: 24,
  },
  buttontextTypo: {
    textAlign: "center",
    color: Color.gray,
    fontFamily: "Poppins-Regular",
    fontSize: 18,
  },
  bottomtabBg: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  growtextbutton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    height: 40,
    width: 40,
    justifyContent: "center",
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
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
    padding: 16,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  namewrapper: {
    flexDirection: "row",
  },
  profilenamewtrapper: {
    flexDirection: "row",
  },
  greeting: {
    color: Color.colorDarkgray,
  },
  greetingwrapper: {
    marginTop: 8,
    flexDirection: "row",
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
    borderRadius: 50,
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    padding: 16,
    overflow: "hidden",
  },
  profilecard: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
    borderRadius: 12,
    padding: 8,
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: 16,
    alignSelf: "stretch",
    alignItems: "center",
  },
  packagePlusIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  iconwrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
  },
  radiotext: {
    color: Color.colorPrimary,
    alignSelf: "stretch",
  },
  radioquwrapper1: {
    marginLeft: 8,
    height: 40,
    flex: 1,
  },
  radioquwrapper: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
    borderRadius: 12,
    padding: 8,
  },
  crowding: {
    marginLeft: 8,
  },
  rectangleParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  rectangleGroup: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  frameParent: {
    marginTop: 8,
    paddingVertical: 0,
  },
  radioquestion: {
    paddingBottom: 16,
  },
  frameChild5: {
    display: "none",
  },
  rectangleParent5: {
    display: "none",
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  maincontainer: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  buttontext1: {
    display: "flex",
    width: 304,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  growtextbutton1: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    justifyContent: "center",
    alignSelf: "stretch",
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  casesutable: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 919,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseSutable;
