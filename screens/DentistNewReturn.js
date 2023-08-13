import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Padding, FontFamily, Color, FontSize } from "../GlobalStyles";

const DentistNewReturn = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dentistnewreturn}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <Pressable
              style={[styles.iconbutton, styles.iconbuttonFlexBox]}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.arrowLeftIcon}
                resizeMode="contain"
                source={require("../assets/arrowleft.png")}
              />
            </Pressable>
            <View style={styles.header1}>
              <Text style={styles.headertext}>New Retrun</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-1.png")}
            />
          </View>
          <View style={styles.prfilecontainer}>
            <View style={[styles.profilecard, styles.inputgroupFlexBox]}>
              <View>
                <View>
                  <View style={styles.profilenamewtrapper}>
                    <View
                      style={[styles.suffixwrapper, styles.iconbuttonFlexBox]}
                    >
                      <Text style={[styles.suffixtext, styles.greetingTypo]}>
                        Dr.
                      </Text>
                    </View>
                    <View
                      style={[styles.namewrapper, styles.iconbuttonFlexBox]}
                    >
                      <Text style={[styles.suffixtext, styles.greetingTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[styles.greetingwrapper, styles.iconbuttonFlexBox]}
                  >
                    <Text style={[styles.greeting, styles.greetingTypo]}>
                      Greeting
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.uploadimage, styles.iconbuttonFlexBox]}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="contain"
                  source={require("../assets/defaultimage.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.fromsection}>
            <View style={[styles.inputgroup, styles.inputgroupFlexBox]}>
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={styles.arrowLeftIcon}
                  resizeMode="contain"
                  source={require("../assets/packageplus22.png")}
                />
              </View>
              <View style={[styles.fieldwrapper, styles.label5SpaceBlock]}>
                <Text style={[styles.label, styles.labelTypo]}>
                  Patient List
                </Text>
                <View style={styles.input}>
                  <TextInput
                    style={styles.inputtext}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupSpaceBlock]}>
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={styles.arrowLeftIcon}
                  resizeMode="contain"
                  source={require("../assets/packageplus23.png")}
                />
              </View>
              <View style={[styles.fieldwrapper, styles.label5SpaceBlock]}>
                <Text style={[styles.label, styles.labelTypo]}>
                  Aligner Number
                </Text>
                <TextInput
                  style={styles.inputtext1}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
            <View style={[styles.inputgroup2, styles.inputgroupSpaceBlock]}>
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={styles.arrowLeftIcon}
                  resizeMode="contain"
                  source={require("../assets/packageplus19.png")}
                />
              </View>
              <View style={[styles.fieldwrapper, styles.label5SpaceBlock]}>
                <Text style={[styles.label, styles.labelTypo]}>
                  Shipping Method
                </Text>
                <View style={styles.input}>
                  <TextInput
                    style={styles.inputtext}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.inputgroup1, styles.inputgroupSpaceBlock]}>
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={styles.arrowLeftIcon}
                  resizeMode="contain"
                  source={require("../assets/packageplus20.png")}
                />
              </View>
              <View style={[styles.fieldwrapper, styles.label5SpaceBlock]}>
                <Text style={[styles.label, styles.labelTypo]}>Post Code</Text>
                <TextInput
                  style={styles.inputtext1}
                  placeholder="Placeholder"
                  placeholderTextColor="#e6e6e6"
                />
              </View>
            </View>
            <View style={[styles.inputgroup2, styles.inputgroupSpaceBlock]}>
              <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                <Image
                  style={styles.arrowLeftIcon}
                  resizeMode="contain"
                  source={require("../assets/packageplus24.png")}
                />
              </View>
              <View style={[styles.fieldwrapper, styles.label5SpaceBlock]}>
                <Text style={[styles.label, styles.labelTypo]}>Reason</Text>
                <View style={styles.input}>
                  <TextInput
                    style={styles.inputtext}
                    placeholder="Placeholder"
                    placeholderTextColor="#e6e6e6"
                  />
                  <Image
                    style={styles.chevronDownIcon}
                    resizeMode="cover"
                    source={require("../assets/chevrondown.png")}
                  />
                </View>
              </View>
            </View>
            <View style={styles.inputgroupSpaceBlock}>
              <View style={styles.inputgroupFlexBox}>
                <View style={[styles.iconbutton, styles.iconbuttonFlexBox]}>
                  <Image
                    style={styles.arrowLeftIcon}
                    resizeMode="contain"
                    source={require("../assets/info4.png")}
                  />
                </View>
                <Text style={[styles.label5, styles.labelTypo]}>
                  Information
                </Text>
              </View>
              <View style={styles.infotextwrapper}>
                <Text
                  style={[styles.infotext, styles.greetingTypo]}
                >{`Please pre-register the return aligner with the necessary support, only in some cases it is necessary to send back the damaged aligner. `}</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.prfilecontainer}>
          <TouchableOpacity
            style={[styles.growtextbutton, styles.bottomtabSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("DentistReturnList")}
          >
            <Text style={[styles.buttontext, styles.iconbuttonFlexBox]}>
              Save New Return
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.bottomtabSpaceBlock]}>
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
  iconbuttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputgroupFlexBox: {
    borderRadius: Border.br_xs,
    padding: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  greetingTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  label5SpaceBlock: {
    marginLeft: 8,
    flex: 1,
  },
  labelTypo: {
    color: Color.colorPrimary,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  inputgroupSpaceBlock: {
    marginTop: 16,
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    alignSelf: "stretch",
  },
  bottomtabSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
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
    width: 40,
    padding: Padding.p_5xs,
    flexDirection: "row",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    justifyContent: "center",
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
    padding: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  suffixtext: {
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
    color: Color.colorDarkgray,
    fontSize: FontSize.bodyMedium_size,
  },
  greetingwrapper: {
    marginTop: 8,
    flexDirection: "row",
  },
  defaultimageIcon: {
    height: 32,
    width: 20,
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
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  label: {
    fontSize: FontSize.bodyMedium_size,
    alignSelf: "stretch",
  },
  inputtext: {
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodySmall,
    flex: 1,
  },
  chevronDownIcon: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  input: {
    height: 19,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fieldwrapper: {
    height: 40,
  },
  inputgroup: {
    height: 56,
    backgroundColor: Color.bgBrown,
  },
  inputtext1: {
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodySmall,
    alignSelf: "stretch",
  },
  inputgroup1: {
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  inputgroup2: {
    height: 56,
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  label5: {
    marginLeft: 8,
    flex: 1,
    fontSize: FontSize.titleMedium_size,
  },
  infotext: {
    fontSize: FontSize.titleMedium_size,
    color: Color.colorWhite,
    flex: 1,
  },
  infotextwrapper: {
    paddingHorizontal: Padding.p_5xs,
    paddingBottom: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  fromsection: {
    paddingHorizontal: Padding.p_base,
    paddingVertical: 0,
    alignSelf: "stretch",
    alignItems: "center",
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
  growtextbutton: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
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
    justifyContent: "space-between",
  },
  dentistnewreturn: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 879,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default DentistNewReturn;
