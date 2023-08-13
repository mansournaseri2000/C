import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  StatusBar
} from "react-native";
import InputGroup from "../components/InputGroup";
import { useNavigation } from "@react-navigation/native";
import UnderBtnText from "../components/UnderBtnText";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const DentistRegister = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dentistregister}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={[styles.topsection, styles.topsectionFlexBox]}>
        <Image
          style={styles.jplignlogoIcon}
          resizeMode="cover"
          source={require("../assets/jplignlogo.png")}
        />
        <View style={styles.formsectionSpaceBlock1}>
          <Text style={[styles.brandtext, styles.labelClr]}>
            Health Teeth Operation GmbH / JPLign
          </Text>
          <Text style={[styles.pagename, styles.pagenameTypo]}>
            Dentist Register Account
          </Text>
        </View>
        <View style={[styles.formsection, styles.formsectionSpaceBlock]}>
          <InputGroup
            iconSrc={require("../assets/packageplus.png")}
            label="Firstname"
            placeholder="Enter your firstname"
            hasIcon
          />
          <View style={styles.inputgroupSpaceBlock}>
            <View style={[styles.inputiconwrapper, styles.buttontextFlexBox]}>
              <Image
                style={styles.packagePlusIcon}
                resizeMode="cover"
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
                resizeMode="cover"
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
          <View style={[styles.inputgroup3, styles.inputgroupSpaceBlock]}>
            <View style={[styles.inputiconwrapper, styles.buttontextFlexBox]}>
              <Image
                style={styles.packagePlusIcon}
                resizeMode="contain"
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
                resizeMode="contain"
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
        <TouchableOpacity
          style={[styles.growtextbutton, styles.buttontextFlexBox]}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("DentistLogin")}
        >
          <Text style={[styles.buttontext, styles.buttontextFlexBox]}>
            Register
          </Text>
        </TouchableOpacity>
        <UnderBtnText inofText="Already have an account?" login="Login" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topsectionFlexBox: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  labelClr: {
    color: Color.colorPrimary,
    textAlign: "left",
  },
  pagenameTypo: {
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  formsectionSpaceBlock: {
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
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    padding: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  jplignlogoIcon: {
    width: 96,
    height: 75,
  },
  brandtext: {
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  pagename: {
    color: Color.colorWhite,
    marginTop: 8,
    textAlign: "left",
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
  input: {
    height: 19,
    flexDirection: "row",
    fontSize: FontSize.bodyMedium_size,
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputgroup3: {
    height: 56,
  },
  formsection: {
    paddingVertical: 0,
    marginTop: 32,
    alignItems: "center",
  },
  topsection: {
    paddingTop: Padding.p_13xl,
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
  bottomsection: {
    padding: Padding.p_base,
  },
  dentistregister: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 898,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default DentistRegister;
