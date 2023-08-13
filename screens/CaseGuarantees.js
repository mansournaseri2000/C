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
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const CaseGuarantees = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.caseguarantees}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <Pressable
              style={[styles.growtextbutton, styles.namewrapperFlexBox]}
            >
              <Text style={[styles.buttontext, styles.buttontextTypo]}>EN</Text>
            </Pressable>
            <View style={[styles.header1, styles.header1FlexBox]}>
              <Text style={styles.headertext}>Guarantees</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={styles.prfilecontainer}>
            <View style={[styles.profilecard, styles.inputgroupSpaceBlock]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View
                      style={[styles.namewrapper, styles.namewrapperFlexBox]}
                    >
                      <Text style={[styles.nametext, styles.nametextTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View style={styles.greetingwrapperFlexBox}>
                    <Text style={[styles.greeting, styles.nametextTypo]}>
                      Greeting
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.uploadimage, styles.namewrapperFlexBox]}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="cover"
                  source={require("../assets/defaultimage2.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.method}>
            <View style={[styles.infocardwrapper, styles.bottomtabBg]}>
              <View style={[styles.inputgroup, styles.inputgroupSpaceBlock]}>
                <View
                  style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
                >
                  <Image
                    style={styles.packagePlusIcon}
                    resizeMode="contain"
                    source={require("../assets/info4.png")}
                  />
                </View>
                <Text style={[styles.label, styles.labelTypo]}>Guarantees</Text>
              </View>
              <View style={styles.infotextwrapper}>
                <Text style={[styles.infotext, styles.nametextTypo]}>
                  Dear doctor, you can choose and order the type of aligner
                  yourself and keep in mind that if the selected plan is
                  different from our chosen plan after the 3D design, you can
                  pay the price difference and if you are confident in your
                  opinion, all the consequences are enough. Accept and approve
                  the work in your dashboard.
                </Text>
              </View>
            </View>
            <Pressable
              style={[styles.growtextbutton1, styles.greetingwrapperFlexBox]}
            >
              <Text style={[styles.buttontext1, styles.buttontextTypo]}>
                Check Guarantees
              </Text>
            </Pressable>
          </View>
          <View style={styles.method1}>
            <View style={[styles.infocardwrapper, styles.bottomtabBg]}>
              <View style={[styles.inputgroup, styles.inputgroupSpaceBlock]}>
                <View
                  style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
                >
                  <Image
                    style={styles.packagePlusIcon}
                    resizeMode="contain"
                    source={require("../assets/info4.png")}
                  />
                </View>
                <Text style={[styles.label, styles.labelTypo]}>
                  New Treatment
                </Text>
              </View>
              <View style={styles.infotextwrapper}>
                <Text style={[styles.infotext, styles.nametextTypo]}>
                  You can order a 3D design before ordering and paying the full
                  cost of the aligner service you want, because the type of
                  aligner will be determined after the 3D design, and in the
                  next step, the paid fee will be deducted from your aligner
                  plan.
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={[styles.growtextbutton1, styles.greetingwrapperFlexBox]}
              activeOpacity={0.8}
              onPress={() => navigation.navigate("CaseAddress")}
            >
              <Text style={[styles.buttontext1, styles.buttontextTypo]}>
                New Treatment
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.underbtntext, styles.header1FlexBox]}>
            <Text style={[styles.nametext, styles.nametextTypo]}>
              Do you want to upload PDF?
            </Text>
            <Text style={styles.labelTypo}>Progress</Text>
          </View>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.bottomtabBg]}>
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
  namewrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttontextTypo: {
    color: Color.gray,
    fontFamily: FontFamily.bodySmall,
    textAlign: "center",
    fontSize: FontSize.titleMedium_size,
  },
  header1FlexBox: {
    paddingVertical: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  inputgroupSpaceBlock: {
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  nametextTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  bottomtabBg: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
  },
  labelTypo: {
    marginLeft: 8,
    color: Color.colorPrimary,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  greetingwrapperFlexBox: {
    marginTop: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
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
    justifyContent: "center",
    backgroundColor: Color.colorPrimary,
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
    color: Color.colorWhite,
    fontSize: FontSize.titleMedium_size,
    textAlign: "left",
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
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    padding: Padding.p_base,
    overflow: "hidden",
  },
  profilecard: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
    borderRadius: Border.br_xs,
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  packagePlusIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  inputiconwrapper: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
  },
  label: {
    flex: 1,
  },
  inputgroup: {
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  infotext: {
    color: Color.colorWhite,
    fontSize: FontSize.titleMedium_size,
    textAlign: "left",
    flex: 1,
  },
  infotextwrapper: {
    paddingHorizontal: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  infocardwrapper: {
    borderRadius: Border.br_xs,
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
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    marginTop: 8,
    alignSelf: "stretch",
  },
  method: {
    paddingTop: Padding.p_base,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  method1: {
    paddingTop: Padding.p_13xl,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  underbtntext: {
    paddingHorizontal: Padding.p_base,
  },
  maincontainer: {
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
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  caseguarantees: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 906,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseGuarantees;
