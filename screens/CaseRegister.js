import * as React from "react";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const CaseRegister = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.caseregister}
      showsVerticalScrollIndicator={true}
      showsHorizontalScrollIndicator={true}
      contentContainerStyle={styles.caseRegisterScrollViewContent}
    >
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={[styles.topsection, styles.topsectionFlexBox]}>
        <Image
          style={styles.jplignlogoIcon}
          resizeMode="cover"
          source={require("../assets/jplignlogo.png")}
        />
        <View style={styles.formsectionSpaceBlock1}>
          <Text style={[styles.brandname, styles.labelFlexBox]}>
            Health Teeth Operation GmbH / JPLign
          </Text>
          <Text style={[styles.pagename, styles.pagenameTypo]}>
            Paitent Register Account
          </Text>
        </View>
        <View style={[styles.formsection, styles.formsectionSpaceBlock]}>
          <View style={styles.inputgroup}>
            <View style={[styles.inputiconwrapper, styles.buttontextFlexBox]}>
              <Image
                style={styles.packagePlusIcon}
                resizeMode="contain"
                source={require("../assets/packageplus.png")}
              />
            </View>
            <View style={styles.fieldinput}>
              <Text style={[styles.label, styles.labelTypo]}>Firstname</Text>
              <TextInput
                style={styles.labelTypo}
                placeholder="Placeholder"
                placeholderTextColor="#e6e6e6"
              />
            </View>
          </View>
          <View style={styles.inputgroupSpaceBlock}>
            <View style={[styles.inputiconwrapper, styles.buttontextFlexBox]}>
              <Image
                style={styles.packagePlusIcon}
                resizeMode="contain"
                source={require("../assets/packageplus.png")}
              />
            </View>
            <View style={styles.fieldinput}>
              <Text style={[styles.label, styles.labelTypo]}>Lastname</Text>
              <TextInput
                style={styles.labelTypo}
                placeholder="Placeholder"
                placeholderTextColor="#e6e6e6"
              />
            </View>
          </View>
          <View style={styles.inputgroupSpaceBlock}>
            <View style={[styles.inputiconwrapper, styles.buttontextFlexBox]}>
              <Image
                style={styles.packagePlusIcon}
                resizeMode="cover"
                source={require("../assets/packageplus1.png")}
              />
            </View>
            <View style={styles.fieldinput}>
              <Text style={[styles.label, styles.labelTypo]}>Phone</Text>
              <TextInput
                style={styles.labelTypo}
                placeholder="Placeholder"
                placeholderTextColor="#e6e6e6"
              />
            </View>
          </View>
          <View style={styles.inputgroupSpaceBlock}>
            <View style={[styles.inputiconwrapper, styles.buttontextFlexBox]}>
              <Image
                style={styles.packagePlusIcon}
                resizeMode="contain"
                source={require("../assets/packageplus2.png")}
              />
            </View>
            <View style={styles.fieldinput}>
              <Text style={[styles.label, styles.labelTypo]}>Email</Text>
              <TextInput
                style={styles.labelTypo}
                placeholder="Placeholder"
                placeholderTextColor="#e6e6e6"
              />
            </View>
          </View>
          <View style={[styles.inputgroup4, styles.inputgroupSpaceBlock]}>
            <View style={[styles.inputiconwrapper, styles.buttontextFlexBox]}>
              <Image
                style={styles.packagePlusIcon}
                resizeMode="cover"
                source={require("../assets/packageplus3.png")}
              />
            </View>
            <View style={styles.fieldinput}>
              <Text style={[styles.label, styles.labelTypo]}>Gender</Text>
              <TextInput
                style={[styles.input, styles.labelTypo]}
                placeholder="Select your gender"
                placeholderTextColor="#e6e6e6"
              />
            </View>
          </View>
          <View style={styles.inputgroupSpaceBlock}>
            <View style={[styles.inputiconwrapper, styles.buttontextFlexBox]}>
              <Image
                style={styles.packagePlusIcon}
                resizeMode="contain"
                source={require("../assets/packageplus4.png")}
              />
            </View>
            <View style={styles.fieldinput}>
              <Text style={[styles.label, styles.labelTypo]}>Birthday</Text>
              <TextInput
                style={styles.labelTypo}
                placeholder="Placeholder"
                placeholderTextColor="#e6e6e6"
              />
            </View>
          </View>
          <View style={styles.inputgroupSpaceBlock}>
            <View style={[styles.inputiconwrapper, styles.buttontextFlexBox]}>
              <Image
                style={styles.packagePlusIcon}
                resizeMode="cover"
                source={require("../assets/packageplus5.png")}
              />
            </View>
            <View style={styles.fieldinput}>
              <Text style={[styles.label, styles.labelTypo]}>Password</Text>
              <TextInput
                style={styles.labelTypo}
                placeholder="Placeholder"
                placeholderTextColor="#e6e6e6"
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bottomsection, styles.topsectionFlexBox]}>
        <Pressable
          style={[styles.growtextbutton, styles.buttontextFlexBox]}
          onPress={() => navigation.navigate("CaseLogin")}
        >
          <Text style={[styles.buttontext, styles.buttontextFlexBox]}>
            Register
          </Text>
        </Pressable>
        <View style={[styles.underbtntext, styles.buttontextFlexBox]}>
          <Text style={styles.pagenameTypo}>Already have an account?</Text>
          <TouchableOpacity
            style={styles.actiontext}
            activeOpacity={0.8}
            onPress={() => navigation.navigate("CaseLogin")}
          >
            <Text style={[styles.login, styles.labelFlexBox]}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  caseRegisterScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  topsectionFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  labelFlexBox: {
    textAlign: "left",
    color: Color.colorPrimary,
  },
  pagenameTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  formsectionSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  buttontextFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  labelTypo: {
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodySmall,
    alignSelf: "stretch",
  },
  inputgroupSpaceBlock: {
    marginTop: 16,
    padding: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  jplignlogoIcon: {
    width: 96,
    height: 75,
  },
  brandname: {
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  pagename: {
    marginTop: 8,
  },
  formsectionSpaceBlock1: {
    marginTop: 32,
    alignItems: "center",
  },
  packagePlusIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  inputiconwrapper: {
    width: 40,
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    flexDirection: "row",
    padding: Padding.p_5xs,
  },
  label: {
    textAlign: "left",
    color: Color.colorPrimary,
  },
  fieldinput: {
    marginLeft: 8,
    height: 40,
    flex: 1,
  },
  inputgroup: {
    padding: Padding.p_5xs,
    flexDirection: "row",
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  input: {
    height: 19,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  inputgroup4: {
    height: 56,
  },
  formsection: {
    marginTop: 32,
    alignItems: "center",
  },
  topsection: {
    paddingTop: Padding.p_13xl,
    alignItems: "center",
  },
  buttontext: {
    color: Color.gray,
    textAlign: "center",
    display: "flex",
    width: 304,
    height: 28,
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  growtextbutton: {
    paddingVertical: Padding.p_5xs,
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  login: {
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  actiontext: {
    marginLeft: 8,
  },
  underbtntext: {
    flexDirection: "row",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    marginTop: 8,
  },
  bottomsection: {
    padding: Padding.p_base,
    alignItems: "center",
  },
  caseregister: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseRegister;
