import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const DentistDifferList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dentistdifferlist}>
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
          <View style={[styles.header1, styles.rowSpaceBlock1]}>
            <Text style={styles.headertext}>Difference</Text>
          </View>
          <Image
            style={styles.headerChild}
            resizeMode="contain"
            source={require("../assets/JplignLogo.png")}
          />
        </View>
        <View style={[styles.profilecontainer, styles.headerSpaceBlock]}>
          <View style={[styles.profilecard, styles.casecardBg]}>
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
                  <Text style={[styles.greeting, styles.phoneClr]}>
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
        <View style={styles.container}>
          <View style={[styles.row, styles.rowSpaceBlock]}>
            <View style={[styles.casecard, styles.casecardBg]}>
              <Image
                style={styles.profilewrapperIcon}
                resizeMode="contain"
                source={require("../assets/SampleProfileImg.png")}
              />
              <View style={styles.infowrapper}>
                <View style={styles.namewrapper1}>
                  <Text style={[styles.nametext1, styles.greetingTypo]}>
                    Fullname
                  </Text>
                </View>
                <View style={styles.detailcontainer}>
                  <View style={styles.phonewrapper}>
                    <Text style={[styles.phone, styles.buttontextTypo]}>
                      +989126030028
                    </Text>
                  </View>
                  <View style={[styles.actions, styles.actionsFlexBox]}>
                    <TouchableOpacity
                      style={[
                        styles.shrinktextbutton,
                        styles.shrinktextbuttonFlexBox,
                      ]}
                      activeOpacity={0.8}
                      onPress={() => navigation.navigate("DentistDiffAccept")}
                    >
                      <Text style={[styles.buttontext, styles.buttontextTypo]}>
                        Accept
                      </Text>
                    </TouchableOpacity>
                    <Pressable
                      style={[
                        styles.shrinktextbutton1,
                        styles.shrinktextbuttonFlexBox,
                      ]}
                    >
                      <Text style={[styles.buttontext1, styles.buttontextTypo]}>
                        € 1800
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.row1, styles.rowSpaceBlock]}>
            <View style={[styles.casecard, styles.casecardBg]}>
              <Image
                style={styles.profilewrapperIcon}
                resizeMode="contain"
                source={require("../assets/SampleProfileImg.png")}
              />
              <View style={styles.infowrapper}>
                <View style={styles.namewrapper1}>
                  <Text style={[styles.nametext1, styles.greetingTypo]}>
                    Fullname
                  </Text>
                </View>
                <View style={styles.detailcontainer}>
                  <View style={styles.phonewrapper}>
                    <Text style={[styles.phone, styles.buttontextTypo]}>
                      +989126030028
                    </Text>
                  </View>
                  <View style={[styles.actions, styles.actionsFlexBox]}>
                    <TouchableOpacity
                      style={[
                        styles.shrinktextbutton,
                        styles.shrinktextbuttonFlexBox,
                      ]}
                      activeOpacity={0.8}
                      onPress={() => navigation.navigate("DentistDiffAccept")}
                    >
                      <Text style={[styles.buttontext, styles.buttontextTypo]}>
                        Accept
                      </Text>
                    </TouchableOpacity>
                    <Pressable
                      style={[
                        styles.shrinktextbutton1,
                        styles.shrinktextbuttonFlexBox,
                      ]}
                    >
                      <Text style={[styles.buttontext1, styles.buttontextTypo]}>
                        € 1800
                      </Text>
                    </Pressable>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.rowSpaceBlock]}>
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
    borderRadius: 15,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  rowSpaceBlock1: {
    paddingVertical: 0,
    alignItems: "center",
  },
  casecardBg: {
    backgroundColor: Color.bgBrown,
    flexDirection: "row",
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
  phoneClr: {
    color: Color.colorDarkgray,
    textAlign: "left",
  },
  rowSpaceBlock: {
    paddingHorizontal: 16,
    alignSelf: "stretch",
  },
  greetingTypo: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
  },
  buttontextTypo: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
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
    padding: 8,
    borderRadius: 15,
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
    borderRadius: 50,
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    justifyContent: "center",
    overflow: "hidden",
  },
  profilecard: {
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    padding: 8,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  profilecontainer: {
    alignSelf: "stretch",
  },
  profilewrapperIcon: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
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
  phone: {
    color: Color.colorDarkgray,
    textAlign: "left",
  },
  phonewrapper: {
    flex: 1,
  },
  buttontext: {
    color: Color.colorPrimary,
    textAlign: "center",
  },
  shrinktextbutton: {
    backgroundColor: Color.gray,
    height: 32,
    justifyContent: "center",
    padding: 8,
    borderRadius: 15,
  },
  buttontext1: {
    color: Color.gray,
    textAlign: "center",
  },
  shrinktextbutton1: {
    marginLeft: 8,
    height: 32,
    justifyContent: "center",
    backgroundColor: Color.colorPrimary,
    padding: 8,
    borderRadius: 15,
  },
  actions: {
    justifyContent: "flex-end",
  },
  detailcontainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  infowrapper: {
    marginLeft: 8,
    flex: 1,
  },
  casecard: {
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    padding: 8,
    alignSelf: "stretch",
    alignItems: "center",
  },
  row: {
    paddingVertical: 0,
    alignItems: "center",
  },
  row1: {
    marginTop: 16,
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
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 5,
    paddingVertical: 8,
    backgroundColor: Color.bgBrown,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dentistdifferlist: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 863,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default DentistDifferList;
