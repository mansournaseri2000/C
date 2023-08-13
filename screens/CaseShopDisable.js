import * as React from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const CaseShopDisable = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.caseshopdisable}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={[styles.header, styles.headerSpaceBlock]}>
            <Pressable
              style={[styles.growtextbutton, styles.shrinkbuttonSpaceBlock1]}
            >
              <Text style={[styles.buttontext, styles.buttontextTypo]}>EN</Text>
            </Pressable>
            <View style={styles.header1}>
              <Text style={styles.headertext}>Products</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={[styles.prfilecontainer, styles.headerSpaceBlock]}>
            <View style={[styles.profilecard, styles.profilecardLayout]}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View style={styles.namewrapper}>
                      <Text style={styles.nametext}>Fullname</Text>
                    </View>
                  </View>
                  <View
                    style={[
                      styles.greetingwrapper,
                      styles.shrinkbuttonSpaceBlock,
                    ]}
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
                  resizeMode="cover"
                  source={require("../assets/defaultimage.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.cardcontainer}>
            <View style={[styles.row, styles.rowSpaceBlock]}>
              <View style={styles.shopcardwrapper}>
                <View style={[styles.shopinfowrapper, styles.rowSpaceBlock]}>
                  <View style={styles.productnamewrapper}>
                    <Text style={[styles.productnametext, styles.greetingTypo]}>
                      Aligner Kit
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.productmodelwrapper,
                      styles.shrinkbuttonSpaceBlock,
                    ]}
                  >
                    <Text
                      style={[
                        styles.productmodeltext,
                        styles.productmodeltextTypo,
                      ]}
                    >
                      Easy
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.productpricewrapper,
                      styles.shrinkbuttonSpaceBlock,
                    ]}
                  >
                    <Text
                      style={[
                        styles.productpricetext,
                        styles.productmodeltextTypo,
                      ]}
                    >
                      € 800
                    </Text>
                  </View>
                  <ImageBackground
                    style={styles.productimageIcon}
                    resizeMode="contain"
                    source={require("../assets/productimage.png")}
                  />
                </View>
                <Pressable
                  style={[styles.shrinkbutton, styles.shrinkbuttonSpaceBlock]}
                >
                  <View style={styles.buttonwrapper}>
                    <Image
                      style={styles.packagePlusIcon}
                      resizeMode="contain"
                      source={require("../assets/packageplus6.png")}
                    />
                    <Text style={[styles.buttontext1, styles.buttontextTypo]}>
                      Buy now
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View style={styles.shopcardwrapper1}>
                <View style={[styles.shopinfowrapper, styles.rowSpaceBlock]}>
                  <View style={styles.productnamewrapper}>
                    <Text style={[styles.productnametext, styles.greetingTypo]}>
                      Aligner Kit
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.productmodelwrapper,
                      styles.shrinkbuttonSpaceBlock,
                    ]}
                  >
                    <Text
                      style={[
                        styles.productmodeltext,
                        styles.productmodeltextTypo,
                      ]}
                    >
                      Easy
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.productpricewrapper,
                      styles.shrinkbuttonSpaceBlock,
                    ]}
                  >
                    <Text
                      style={[
                        styles.productpricetext,
                        styles.productmodeltextTypo,
                      ]}
                    >
                      € 800
                    </Text>
                  </View>
                  <ImageBackground
                    style={styles.productimageIcon}
                    resizeMode="contain"
                    source={require("../assets/productimage.png")}
                  />
                </View>
                <TouchableOpacity
                  style={[styles.shrinkbutton1, styles.shrinkbuttonSpaceBlock]}
                  activeOpacity={0.8}
                  onPress={() => navigation.navigate("CaseShopDetail")}
                >
                  <View style={styles.buttonwrapper}>
                    <Image
                      style={styles.packagePlusIcon}
                      resizeMode="contain"
                      source={require("../assets/packageplus6.png")}
                    />
                    <Text style={[styles.buttontext1, styles.buttontextTypo]}>
                      Buy now
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.row1, styles.shrinkbuttonSpaceBlock]}>
              <View style={styles.shopcardwrapper}>
                <View style={[styles.shopinfowrapper, styles.rowSpaceBlock]}>
                  <View style={styles.productnamewrapper}>
                    <Text style={[styles.productnametext, styles.greetingTypo]}>
                      Aligner Kit
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.productmodelwrapper,
                      styles.shrinkbuttonSpaceBlock,
                    ]}
                  >
                    <Text
                      style={[
                        styles.productmodeltext,
                        styles.productmodeltextTypo,
                      ]}
                    >
                      Easy
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.productpricewrapper,
                      styles.shrinkbuttonSpaceBlock,
                    ]}
                  >
                    <Text
                      style={[
                        styles.productpricetext,
                        styles.productmodeltextTypo,
                      ]}
                    >
                      € 800
                    </Text>
                  </View>
                  <ImageBackground
                    style={styles.productimageIcon}
                    resizeMode="contain"
                    source={require("../assets/productimage.png")}
                  />
                </View>
                <Pressable
                  style={[styles.shrinkbutton, styles.shrinkbuttonSpaceBlock]}
                >
                  <View style={styles.buttonwrapper}>
                    <Image
                      style={styles.packagePlusIcon}
                      resizeMode="contain"
                      source={require("../assets/packageplus6.png")}
                    />
                    <Text style={[styles.buttontext1, styles.buttontextTypo]}>
                      Buy now
                    </Text>
                  </View>
                </Pressable>
              </View>
              <View style={styles.shopcardwrapper1}>
                <View style={[styles.shopinfowrapper, styles.rowSpaceBlock]}>
                  <View style={styles.productnamewrapper}>
                    <Text style={[styles.productnametext, styles.greetingTypo]}>
                      Aligner Kit
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.productmodelwrapper,
                      styles.shrinkbuttonSpaceBlock,
                    ]}
                  >
                    <Text
                      style={[
                        styles.productmodeltext,
                        styles.productmodeltextTypo,
                      ]}
                    >
                      Easy
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.productpricewrapper,
                      styles.shrinkbuttonSpaceBlock,
                    ]}
                  >
                    <Text
                      style={[
                        styles.productpricetext,
                        styles.productmodeltextTypo,
                      ]}
                    >
                      € 800
                    </Text>
                  </View>
                  <ImageBackground
                    style={styles.productimageIcon}
                    resizeMode="contain"
                    source={require("../assets/productimage.png")}
                  />
                </View>
                <Pressable
                  style={[styles.shrinkbutton, styles.shrinkbuttonSpaceBlock]}
                >
                  <View style={styles.buttonwrapper}>
                    <Image
                      style={styles.packagePlusIcon}
                      resizeMode="contain"
                      source={require("../assets/packageplus6.png")}
                    />
                    <Text style={[styles.buttontext1, styles.buttontextTypo]}>
                      Buy now
                    </Text>
                  </View>
                </Pressable>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bottomtab, styles.shrinkbuttonSpaceBlock1]}>
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
  shrinkbuttonSpaceBlock1: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
  },
  buttontextTypo: {
    color: Color.gray,
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  profilecardLayout: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
  },
  shrinkbuttonSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  greetingTypo: {
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  rowSpaceBlock: {
    paddingTop: Padding.p_45xl,
    alignSelf: "stretch",
  },
  productmodeltextTypo: {
    color: Color.colorPrimary,
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  buttontext: {
    textAlign: "center",
  },
  growtextbutton: {
    width: 40,
    justifyContent: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_mini,
    alignItems: "center",
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
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  nametext: {
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  namewrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  profilenamewtrapper: {
    flexDirection: "row",
  },
  greeting: {
    fontSize: FontSize.bodyMedium_size,
  },
  greetingwrapper: {
    justifyContent: "center",
    alignItems: "center",
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
    justifyContent: "center",
    overflow: "hidden",
  },
  profilecard: {
    padding: Padding.p_5xs,
    backgroundColor: Color.bgBrown,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    alignSelf: "stretch",
  },
  productnametext: {
    fontSize: FontSize.titleLarge_size,
    width: 148,
  },
  productnamewrapper: {
    padding: Padding.p_9xs,
    zIndex: 0,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  productmodeltext: {
    textAlign: "left",
  },
  productmodelwrapper: {
    zIndex: 1,
    alignSelf: "stretch",
    alignItems: "center",
  },
  productpricetext: {
    textAlign: "right",
  },
  productpricewrapper: {
    zIndex: 2,
    alignSelf: "stretch",
    alignItems: "center",
  },
  productimageIcon: {
    position: "absolute",
    marginLeft: -63.5,
    top: -72,
    left: "50%",
    width: 128,
    height: 128,
    zIndex: 3,
  },
  shopinfowrapper: {
    paddingHorizontal: Padding.p_5xs,
    paddingBottom: Padding.p_base,
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
  },
  packagePlusIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  buttontext1: {
    marginLeft: 8,
    textAlign: "center",
  },
  buttonwrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  shrinkbutton: {
    backgroundColor: Color.colorDarkgray,
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    height: 40,
    borderRadius: Border.br_mini,
    marginTop: 8,
    alignSelf: "stretch",
    alignItems: "center",
  },
  shopcardwrapper: {
    flex: 1,
  },
  shrinkbutton1: {
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: Border.br_mini,
    alignItems: "center",
    alignSelf: "stretch",
  },
  shopcardwrapper1: {
    marginLeft: 16,
    flex: 1,
  },
  row: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  row1: {
    paddingTop: 80,
    alignSelf: "stretch",
  },
  cardcontainer: {
    paddingTop: Padding.p_base,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
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
    backgroundColor: Color.bgBrown,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  caseshopdisable: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 969,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseShopDisable;
