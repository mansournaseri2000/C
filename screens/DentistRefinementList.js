import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DentistRefinementList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dentistrefinementlist}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={[styles.header, styles.headerSpaceBlock]}>
          <Pressable
            style={[styles.iconbutton, styles.shrinktextbuttonFlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.arrowLeftIcon}
              resizeMode="contain"
              source={require("../assets/icons/arrow-left.png")}
            />
          </Pressable>
          <View style={[styles.header1, styles.header1SpaceBlock]}>
            <Text style={styles.headertext}>Refinement</Text>
          </View>
          <Image
            style={styles.headerChild}
            resizeMode="contain"
            source={require("../assets/JplignLogo.png")}
          />
        </View>
        <View style={[styles.profilecontainer, styles.headerSpaceBlock]}>
          <View style={[styles.profilecard, styles.casecardFlexBox]}>
            <View>
              <View>
                <View style={styles.profilenamewtrapper}>
                  <View style={styles.suffixwrapper}>
                    <Text style={[styles.suffixtext, styles.nametext1FlexBox]}>
                      Dr.
                    </Text>
                  </View>
                  <View style={[styles.namewrapper, styles.actionsFlexBox]}>
                    <Text style={[styles.suffixtext, styles.nametext1FlexBox]}>
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
            <View style={[styles.uploadimage, styles.headerSpaceBlock]}>
              <Image
                style={styles.defaultimageIcon}
                resizeMode="contain"
                source={require("../assets/ProfileImg.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.caselist, styles.caselistSpaceBlock]}>
          <View style={[styles.casecard, styles.casecardFlexBox]}>
            <View style={styles.profilewrapper}>
              <ImageBackground
                style={styles.caseprofileIcon}
                resizeMode="contain"
                source={require("../assets/SampleProfileImg.png")}
              />
            </View>
            <View style={styles.infowrapper}>
              <View style={styles.namewrapper1}>
                <Text style={[styles.nametext1, styles.greetingTypo]}>
                  Fullname
                </Text>
              </View>
              <View style={styles.detailwrapper}>
                <View style={styles.phonewrapper}>
                  <Text style={[styles.phonetext, styles.phonetextTypo]}>
                    +989126030028
                  </Text>
                </View>
                <View style={[styles.actions, styles.actionsFlexBox]}>
                  <Pressable
                    style={[styles.shrinktextbutton, styles.bottomtabBorder]}
                  >
                    <Text
                      style={[styles.ghostbuttontext, styles.phonetextTypo]}
                    >
                      05
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.shrinktextbutton1,
                      styles.shrinktextbuttonFlexBox,
                    ]}
                  >
                    <Text style={[styles.buttontext, styles.phonetextTypo]}>
                      Login
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.casecard1, styles.casecardFlexBox]}>
            <View style={styles.profilewrapper}>
              <ImageBackground
                style={styles.caseprofileIcon}
                resizeMode="contain"
                source={require("../assets/SampleProfileImg.png")}
              />
            </View>
            <View style={styles.infowrapper}>
              <View style={styles.namewrapper1}>
                <Text style={[styles.nametext1, styles.greetingTypo]}>
                  Fullname
                </Text>
              </View>
              <View style={styles.detailwrapper}>
                <View style={styles.phonewrapper}>
                  <Text style={[styles.phonetext, styles.phonetextTypo]}>
                    +989126030028
                  </Text>
                </View>
                <View style={[styles.actions, styles.actionsFlexBox]}>
                  <Pressable
                    style={[styles.shrinktextbutton, styles.bottomtabBorder]}
                  >
                    <Text
                      style={[styles.ghostbuttontext, styles.phonetextTypo]}
                    >
                      05
                    </Text>
                  </Pressable>
                  <Pressable
                    style={[
                      styles.shrinktextbutton1,
                      styles.shrinktextbuttonFlexBox,
                    ]}
                  >
                    <Text style={[styles.buttontext, styles.phonetextTypo]}>
                      Login
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.bottomtabBorder]}>
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
  headerSpaceBlock: {
    padding: 16,
    alignItems: "center",
  },
  shrinktextbuttonFlexBox: {
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  header1SpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  casecardFlexBox: {
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    padding: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  nametext1FlexBox: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  actionsFlexBox: {
    marginLeft: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  greetingClr: {
    color: Color.colorDarkgray,
    textAlign: "left",
  },
  caselistSpaceBlock: {
    paddingHorizontal: 16,
    alignSelf: "stretch",
  },
  greetingTypo: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  phonetextTypo: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  bottomtabBorder: {
    borderStyle: "solid",
    flexDirection: "row",
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
    width: 40,
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    padding: 8,
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
    justifyContent: "center",
    flexDirection: "row",
  },
  headerChild: {
    width: 50,
    height: 40,
  },
  header: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  suffixtext: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    textAlign: "left",
  },
  suffixwrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  namewrapper: {
    justifyContent: "center",
  },
  profilenamewtrapper: {
    flexDirection: "row",
  },
  greeting: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  greetingwrapper: {
    marginTop: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
    overflow: "hidden",
  },
  profilecard: {
    backgroundColor: Color.bgBrown,
    justifyContent: "space-between",
  },
  profilecontainer: {
    alignSelf: "stretch",
  },
  caseprofileIcon: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  profilewrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  nametext1: {
    textAlign: "left",
    color: Color.colorWhite,
  },
  namewrapper1: {
    flexWrap: "wrap",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  phonetext: {
    color: Color.colorDarkgray,
    textAlign: "left",
    alignSelf: "stretch",
  },
  phonewrapper: {
    flex: 1,
  },
  ghostbuttontext: {
    color: Color.colorPrimary,
    textAlign: "center",
  },
  shrinktextbutton: {
    borderColor: "#241b18",
    borderWidth: 1,
    height: 32,
    borderRadius: 50,
    justifyContent: "center",
    padding: 8,
    alignItems: "center",
  },
  buttontext: {
    color: Color.gray,
    textAlign: "center",
  },
  shrinktextbutton1: {
    marginLeft: 8,
    height: 32,
    justifyContent: "center",
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    padding: 8,
    flexDirection: "row",
  },
  actions: {
    justifyContent: "flex-end",
  },
  detailwrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  infowrapper: {
    marginLeft: 8,
    flex: 1,
  },
  casecard: {
    backgroundColor: Color.bgBrown,
    alignItems: "center",
  },
  casecard1: {
    marginTop: 16,
    backgroundColor: Color.bgBrown,
    alignItems: "center",
  },
  caselist: {
    paddingVertical: 0,
    alignItems: "center",
  },
  container: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  youtubeIcon: {
    overflow: "hidden",
  },
  bottomtab: {
    borderColor: "#000",
    borderTopWidth: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignSelf: "stretch",
    backgroundColor: Color.bgBrown,
    justifyContent: "space-between",
  },
  dentistrefinementlist: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 863,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default DentistRefinementList;
