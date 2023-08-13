import * as React from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const DentistGuaranteeList = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.dentistguaranteelist, styles.textwrapperFlexBox]}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={[styles.header, styles.headerSpaceBlock]}>
          <Pressable
            style={[styles.iconbutton, styles.searchbtnFlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.arrowLeftIcon}
              resizeMode="contain"
              source={require("../assets/arrowleft.png")}
            />
          </Pressable>
          <View style={[styles.header1, styles.header1SpaceBlock]}>
            <Text style={styles.headertext}>Guarantee</Text>
          </View>
          <Image
            style={styles.headerChild}
            resizeMode="contain"
            source={require("../assets/group-1.png")}
          />
        </View>
        <View style={[styles.prfilecontainer, styles.headerSpaceBlock]}>
          <View style={[styles.profilecard, styles.gauranteecardLayout]}>
            <View>
              <View>
                <View style={styles.profilenamewtrapper}>
                  <View style={styles.suffixwrapper}>
                    <Text style={[styles.suffixtext, styles.suffixtextTypo]}>
                      Dr.
                    </Text>
                  </View>
                  <View style={styles.namewrapper}>
                    <Text style={[styles.suffixtext, styles.suffixtextTypo]}>
                      Fullname
                    </Text>
                  </View>
                </View>
                <View
                  style={[styles.greetingwrapper, styles.statuswarpperFlexBox]}
                >
                  <Text style={[styles.greeting, styles.greetingTypo]}>
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
        <View style={styles.container}>
          <View style={styles.container}>
            <View style={[styles.searchbtnWrapper, styles.bottomtabSpaceBlock]}>
              <View style={[styles.searchbtn, styles.searchbtnFlexBox]}>
                <Image
                  style={styles.arrowLeftIcon}
                  resizeMode="contain"
                  source={require("../assets/search.png")}
                />
                <TextInput
                  style={[styles.textwrapper, styles.textwrapperSpaceBlock]}
                  placeholder="Search"
                  placeholderTextColor="#fff"
                />
              </View>
            </View>
          </View>
          <View style={styles.returncard1}>
            <View style={[styles.searchbtnWrapper, styles.bottomtabSpaceBlock]}>
              <View style={[styles.gauranteecard, styles.gauranteecardLayout]}>
                <View style={styles.fullnamewrapper}>
                  <Image
                    style={styles.userIcon}
                    resizeMode="contain"
                    source={require("../assets/user1.png")}
                  />
                  <Text
                    style={[styles.fullnametext, styles.textwrapperSpaceBlock]}
                  >
                    Fullname
                  </Text>
                </View>
                <View
                  style={[styles.productwrapper, styles.statuswarpperFlexBox]}
                >
                  <Image
                    style={styles.userIcon}
                    resizeMode="contain"
                    source={require("../assets/package.png")}
                  />
                  <Text
                    style={[styles.producttext, styles.textwrapperSpaceBlock]}
                  >
                    Aligner Name
                  </Text>
                </View>
                <View
                  style={[styles.statuswarpper, styles.statuswarpperFlexBox]}
                >
                  <View style={styles.suffixwrapper}>
                    <Image
                      style={styles.userIcon}
                      resizeMode="contain"
                      source={require("../assets/baggageclaim.png")}
                    />
                    <Text
                      style={[styles.producttext, styles.textwrapperSpaceBlock]}
                    >
                      Guarantee Status
                    </Text>
                  </View>
                  <View style={styles.suffixwrapper}>
                    <Text style={[styles.statustext, styles.statustextTypo]}>
                      Rejected
                    </Text>
                  </View>
                </View>
              </View>
              <View style={[styles.gauranteecard1, styles.gauranteecardLayout]}>
                <View style={styles.fullnamewrapper}>
                  <Image
                    style={styles.userIcon}
                    resizeMode="contain"
                    source={require("../assets/user1.png")}
                  />
                  <Text
                    style={[styles.fullnametext, styles.textwrapperSpaceBlock]}
                  >
                    Fullname
                  </Text>
                </View>
                <View
                  style={[styles.productwrapper, styles.statuswarpperFlexBox]}
                >
                  <Image
                    style={styles.userIcon}
                    resizeMode="contain"
                    source={require("../assets/package.png")}
                  />
                  <Text
                    style={[styles.producttext, styles.textwrapperSpaceBlock]}
                  >
                    Aligner Name
                  </Text>
                </View>
                <View
                  style={[styles.statuswarpper, styles.statuswarpperFlexBox]}
                >
                  <View style={styles.suffixwrapper}>
                    <Image
                      style={styles.userIcon}
                      resizeMode="contain"
                      source={require("../assets/baggageclaim.png")}
                    />
                    <Text
                      style={[styles.producttext, styles.textwrapperSpaceBlock]}
                    >
                      Guarantee Status
                    </Text>
                  </View>
                  <View style={styles.suffixwrapper}>
                    <Text style={[styles.statustext1, styles.statustextTypo]}>
                      Accepted
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
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
  textwrapperFlexBox: {
    flex: 1,
    alignItems: "center",
  },
  headerSpaceBlock: {
    padding: Padding.p_base,
    alignItems: "center",
  },
  searchbtnFlexBox: {
    padding: Padding.p_5xs,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    flexDirection: "row",
    alignItems: "center",
  },
  header1SpaceBlock: {
    paddingVertical: 0,
    alignItems: "center",
  },
  gauranteecardLayout: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
    padding: Padding.p_5xs,
    alignSelf: "stretch",
  },
  suffixtextTypo: {
    textAlign: "left",
    fontSize: FontSize.titleMedium_size,
    color: Color.colorWhite,
  },
  statuswarpperFlexBox: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  greetingTypo: {
    color: Color.colorDarkgray,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
  },
  bottomtabSpaceBlock: {
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  textwrapperSpaceBlock: {
    marginLeft: 8,
    fontFamily: FontFamily.bodySmall,
  },
  statustextTypo: {
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
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
    fontFamily: FontFamily.bodySmall,
  },
  suffixwrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  namewrapper: {
    marginLeft: 4,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  profilenamewtrapper: {
    flexDirection: "row",
  },
  greeting: {
    fontFamily: FontFamily.bodySmall,
  },
  greetingwrapper: {
    justifyContent: "center",
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
    justifyContent: "center",
    overflow: "hidden",
  },
  profilecard: {
    backgroundColor: Color.bgBrown,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    alignSelf: "stretch",
  },
  textwrapper: {
    fontSize: FontSize.size_mini,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  searchbtn: {
    alignSelf: "stretch",
  },
  searchbtnWrapper: {
    paddingVertical: 0,
    alignItems: "center",
  },
  container: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  userIcon: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  fullnametext: {
    textAlign: "left",
    fontSize: FontSize.titleMedium_size,
    color: Color.colorWhite,
  },
  fullnamewrapper: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  producttext: {
    color: Color.colorDarkgray,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
  },
  productwrapper: {
    alignSelf: "stretch",
  },
  statustext: {
    color: Color.colorDanger,
  },
  statuswarpper: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  gauranteecard: {
    backgroundColor: Color.bgBrown,
  },
  statustext1: {
    color: Color.colorSuccess,
  },
  gauranteecard1: {
    marginTop: 10,
    backgroundColor: Color.bgBrown,
  },
  returncard1: {
    marginTop: 16,
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
    paddingVertical: Padding.p_5xs,
    backgroundColor: Color.bgBrown,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dentistguaranteelist: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 863,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default DentistGuaranteeList;
