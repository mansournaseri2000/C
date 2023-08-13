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
              source={require("../assets/arrowleft.png")}
            />
          </Pressable>
          <View style={[styles.header1, styles.header1SpaceBlock]}>
            <Text style={styles.headertext}>Refinement</Text>
          </View>
          <Image
            style={styles.headerChild}
            resizeMode="contain"
            source={require("../assets/group-1.png")}
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
                source={require("../assets/defaultimage.png")}
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
                source={require("../assets/caseprofile.png")}
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
                source={require("../assets/caseprofile.png")}
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
  headerSpaceBlock: {
    padding: Padding.p_base,
    alignItems: "center",
  },
  shrinktextbuttonFlexBox: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    alignItems: "center",
  },
  header1SpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  casecardFlexBox: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
    padding: Padding.p_5xs,
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
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  greetingTypo: {
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodySmall,
  },
  phonetextTypo: {
    fontSize: FontSize.bodySmall_size,
    fontFamily: FontFamily.bodySmall,
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
    borderRadius: Border.br_mini,
    padding: Padding.p_5xs,
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
    fontSize: FontSize.titleMedium_size,
    fontFamily: FontFamily.bodySmall,
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
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodySmall,
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
    borderRadius: Border.br_31xl,
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
    borderRadius: Border.br_31xl,
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
    borderRadius: Border.br_31xl,
    justifyContent: "center",
    padding: Padding.p_5xs,
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
    borderRadius: Border.br_mini,
    padding: Padding.p_5xs,
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
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
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
