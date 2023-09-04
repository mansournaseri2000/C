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

const CaseOrderMethods = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.caseordermethods}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <Pressable style={[styles.growtextbutton, styles.header1FlexBox]}>
              <Text style={[styles.buttontext, styles.buttontextTypo]}>EN</Text>
            </Pressable>
            <View style={[styles.header1, styles.header1FlexBox]}>
              <Text style={styles.headertext}>Order Methods</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/JplignLogo.png")}
            />
          </View>
          <View style={styles.prfilecontainer}>
            <View style={[styles.profilecard, styles.inputgroupSpaceBlock]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View style={[styles.namewrapper, styles.header1FlexBox]}>
                      <Text style={[styles.nametext, styles.labelTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View style={styles.greetingwrapperFlexBox}>
                    <Text style={[styles.greeting, styles.labelTypo]}>
                      Greeting
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.uploadimage, styles.header1FlexBox]}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="cover"
                  source={require("../assets/ProfileImg.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.method, styles.methodSpaceBlock]}>
            <View style={[styles.infocardwrapper, styles.bottomtabBg]}>
              <View style={[styles.inputgroup, styles.inputgroupSpaceBlock]}>
                <View
                  style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
                >
                  <Image
                    style={styles.packagePlusIcon}
                    resizeMode="contain"
                    source={require("../assets/icons/doctor.png")}
                  />
                </View>
                <Text style={[styles.label, styles.labelTypo]}>
                  Direct Payment
                </Text>
              </View>
              <View style={styles.infotextwrapper}>
                <Text style={[styles.infotext, styles.labelTypo]}>
                  Dear doctor, you can choose and order the type of aligner
                  yourself and keep in mind that if the selected plan is
                  different from our chosen plan after the 3D design, you can
                  pay the price difference and if you are confident in your
                  opinion, all the consequences are enough. Accept and approve
                  the work in your dashboard.
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={[styles.growtextbutton1, styles.greetingwrapperFlexBox]}
              activeOpacity={0.2}
              onPress={() => navigation.navigate("CaseShopDisable")}
            >
              <Text style={[styles.buttontext1, styles.buttontextTypo]}>
                Select Aligner by Doctor
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.method1, styles.methodSpaceBlock]}>
            <View style={[styles.infocardwrapper, styles.bottomtabBg]}>
              <View style={[styles.inputgroup, styles.inputgroupSpaceBlock]}>
                <View
                  style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
                >
                  <Image
                    style={styles.packagePlusIcon}
                    resizeMode="contain"
                    source={require("../assets/icons/3d.png")}
                  />
                </View>
                <Text style={[styles.label, styles.labelTypo]}>
                  Request Simulation
                </Text>
              </View>
              <View style={styles.infotextwrapper}>
                <Text style={[styles.infotext, styles.labelTypo]}>
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
              onPress={() => navigation.navigate("Case3DPaymentSuccess")}
            >
              <Text style={[styles.buttontext1, styles.buttontextTypo]}>
                Request Simulation
              </Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.method1, styles.methodSpaceBlock]}>
            <View style={[styles.infocardwrapper, styles.bottomtabBg]}>
              <View style={[styles.inputgroup, styles.inputgroupSpaceBlock]}>
                <Pressable
                  style={[styles.inputiconwrapper, styles.inputgroupSpaceBlock]}
                >
                  <Image
                    style={styles.packagePlusIcon}
                    resizeMode="contain"
                    source={require("../assets/icons/support.png")}
                  />
                </Pressable>
                <Text style={[styles.label, styles.labelTypo]}>
                  Single Payment plan
                </Text>
              </View>
              <View style={styles.infotextwrapper}>
                <Text style={[styles.infotext, styles.labelTypo]}>
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
              onPress={() => navigation.navigate("CaseShopDisable")}
            >
              <Text style={[styles.buttontext1, styles.buttontextTypo]}>
                Select Aligner by Jplign
              </Text>
            </TouchableOpacity>
          </View>
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
  header1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttontextTypo: {
    color: Color.gray,
    fontFamily: "Poppins-Regular",
    textAlign: "center",
    fontSize: 18,
  },
  inputgroupSpaceBlock: {
    padding: 8,
    flexDirection: "row",
  },
  labelTypo: {
    textAlign: "left",
    fontFamily: "Poppins-Regular",
  },
  methodSpaceBlock: {
    paddingHorizontal: 16,
    alignSelf: "stretch",
  },
  bottomtabBg: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 40,
    width: 40,
    justifyContent: "center",
    backgroundColor: Color.colorPrimary,
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
  nametext: {
    color: Color.colorWhite,
    fontSize: 18,
    textAlign: "left",
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
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: 16,
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
    borderRadius: 15,
  },
  label: {
    color: Color.colorPrimary,
    marginLeft: 8,
    fontSize: 18,
    textAlign: "left",
    flex: 1,
  },
  inputgroup: {
    borderRadius: 12,
    alignSelf: "stretch",
  },
  infotext: {
    color: Color.colorWhite,
    fontSize: 18,
    textAlign: "left",
    flex: 1,
  },
  infotextwrapper: {
    paddingHorizontal: 8,
    paddingBottom: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  infocardwrapper: {
    borderRadius: 12,
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    marginTop: 8,
    alignSelf: "stretch",
  },
  method: {
    paddingTop: 16,
  },
  method1: {
    paddingTop: 32,
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
    paddingVertical: 8,
    paddingHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  caseordermethods: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 1212,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseOrderMethods;
