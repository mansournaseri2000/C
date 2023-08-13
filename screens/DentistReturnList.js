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
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const DentistReturnList = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dentistreturnlist}>
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
              <Text style={styles.headertext}>Return</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-1.png")}
            />
          </View>
          <View style={styles.prfilecontainer}>
            <View style={[styles.profilecard, styles.returncardLayout]}>
              <View>
                <View>
                  <View style={styles.profilenamewtrapper}>
                    <View
                      style={[styles.suffixwrapper, styles.iconbuttonFlexBox]}
                    >
                      <Text style={[styles.suffixtext, styles.suffixtextTypo]}>
                        Dr.
                      </Text>
                    </View>
                    <View
                      style={[styles.namewrapper, styles.iconbuttonFlexBox]}
                    >
                      <Text style={[styles.suffixtext, styles.suffixtextTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.greetingwrapper,
                      styles.detailwrapperSpaceBlock,
                    ]}
                  >
                    <Text style={[styles.greeting, styles.productTypo]}>
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
          <View style={styles.cardcontainer}>
            <View style={[styles.searchbtn, styles.searchbtnSpaceBlock]}>
              <Image
                style={styles.arrowLeftIcon}
                resizeMode="contain"
                source={require("../assets/search.png")}
              />
              <TextInput
                style={[styles.textwrapper, styles.productSpaceBlock]}
                placeholder="Search"
                placeholderTextColor="#fff"
              />
            </View>
            <View style={[styles.returncard, styles.returncardLayout]}>
              <View style={styles.namewrapper1}>
                <Image
                  style={styles.userIcon}
                  resizeMode="contain"
                  source={require("../assets/user1.png")}
                />
                <Text
                  style={[styles.alirezaNaserzare, styles.productSpaceBlock]}
                >
                  Alireza Naserzare
                </Text>
              </View>
              <View
                style={[styles.productwrapper, styles.detailwrapperSpaceBlock]}
              >
                <Image
                  style={styles.userIcon}
                  resizeMode="contain"
                  source={require("../assets/package1.png")}
                />
                <Text style={[styles.product, styles.productSpaceBlock]}>
                  Teeth Molding Kit comp...
                </Text>
              </View>
              <View
                style={[styles.detailwrapper, styles.detailwrapperSpaceBlock]}
              >
                <View style={[styles.suffixwrapper, styles.iconbuttonFlexBox]}>
                  <Image
                    style={styles.userIcon}
                    resizeMode="contain"
                    source={require("../assets/baggageclaim2.png")}
                  />
                  <Text
                    style={[styles.shippingmethod, styles.productSpaceBlock]}
                  >
                    Shipping Method
                  </Text>
                </View>
                <View style={[styles.suffixwrapper, styles.iconbuttonFlexBox]}>
                  <Image
                    style={styles.userIcon}
                    resizeMode="cover"
                    source={require("../assets/calendarclock1.png")}
                  />
                  <Text
                    style={[styles.shippingmethod, styles.productSpaceBlock]}
                  >
                    15/03/2023
                  </Text>
                </View>
              </View>
            </View>
            <View style={[styles.returncard, styles.returncardLayout]}>
              <View style={styles.namewrapper1}>
                <Image
                  style={styles.userIcon}
                  resizeMode="contain"
                  source={require("../assets/user1.png")}
                />
                <Text
                  style={[styles.alirezaNaserzare, styles.productSpaceBlock]}
                >
                  Alireza Naserzare
                </Text>
              </View>
              <View
                style={[styles.productwrapper, styles.detailwrapperSpaceBlock]}
              >
                <Image
                  style={styles.userIcon}
                  resizeMode="contain"
                  source={require("../assets/package1.png")}
                />
                <Text style={[styles.product, styles.productSpaceBlock]}>
                  Teeth Molding Kit comp...
                </Text>
              </View>
              <View
                style={[styles.detailwrapper, styles.detailwrapperSpaceBlock]}
              >
                <View style={[styles.suffixwrapper, styles.iconbuttonFlexBox]}>
                  <Image
                    style={styles.userIcon}
                    resizeMode="contain"
                    source={require("../assets/baggageclaim2.png")}
                  />
                  <Text
                    style={[styles.shippingmethod, styles.productSpaceBlock]}
                  >
                    Shipping Method
                  </Text>
                </View>
                <View style={[styles.suffixwrapper, styles.iconbuttonFlexBox]}>
                  <Image
                    style={styles.userIcon}
                    resizeMode="cover"
                    source={require("../assets/calendarclock1.png")}
                  />
                  <Text
                    style={[styles.shippingmethod, styles.productSpaceBlock]}
                  >
                    15/03/2023
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.prfilecontainer}>
          <TouchableOpacity
            style={[styles.growtextbutton, styles.bottomtabSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("DentistNewReturn")}
          >
            <Text style={styles.buttontext}>New Return</Text>
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
  returncardLayout: {
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
  detailwrapperSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  productTypo: {
    color: Color.colorDarkgray,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
  },
  searchbtnSpaceBlock: {
    padding: Padding.p_5xs,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    flexDirection: "row",
  },
  productSpaceBlock: {
    marginLeft: 8,
    fontFamily: FontFamily.bodySmall,
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
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    flexDirection: "row",
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
    fontFamily: FontFamily.bodySmall,
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
    fontFamily: FontFamily.bodySmall,
  },
  greetingwrapper: {
    justifyContent: "center",
    alignItems: "center",
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
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  textwrapper: {
    fontSize: FontSize.size_mini,
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  searchbtn: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  userIcon: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  alirezaNaserzare: {
    lineHeight: 16,
    textAlign: "left",
    fontSize: FontSize.titleMedium_size,
    color: Color.colorWhite,
  },
  namewrapper1: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  product: {
    lineHeight: 24,
    color: Color.colorDarkgray,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    flex: 1,
  },
  productwrapper: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  shippingmethod: {
    lineHeight: 14,
    color: Color.colorDarkgray,
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
  },
  detailwrapper: {
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  returncard: {
    marginTop: 16,
    backgroundColor: Color.bgBrown,
  },
  cardcontainer: {
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
    justifyContent: "center",
    alignItems: "center",
  },
  growtextbutton: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    paddingVertical: Padding.p_5xs,
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
  dentistreturnlist: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 863,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default DentistReturnList;
