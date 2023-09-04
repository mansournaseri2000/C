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
                source={require("../assets/icons/arrow-left.png")}
              />
            </Pressable>
            <View style={styles.header1}>
              <Text style={styles.headertext}>Return</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/JplignLogo.png")}
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
                  source={require("../assets/ProfileImg.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.cardcontainer}>
            <View style={[styles.searchbtn, styles.searchbtnSpaceBlock]}>
              <Image
                style={styles.arrowLeftIcon}
                resizeMode="contain"
                source={require("../assets/icons/search-white.png")}
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
                  source={require("../assets/icons/user.png")}
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
                  source={require("../assets/icons/box.png")}
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
                    source={require("../assets/icons/baggage-claim.png")}
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
                    source={require("../assets/icons/calendar.png")}
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
                  source={require("../assets/icons/user.png")}
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
                  source={require("../assets/icons/box.png")}
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
                    source={require("../assets/icons/baggage-claim.png")}
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
                    source={require("../assets/icons/calendar.png")}
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
  iconbuttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  returncardLayout: {
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    padding: 8,
    alignSelf: "stretch",
  },
  suffixtextTypo: {
    textAlign: "left",
    fontSize: 18,
    color: Color.colorWhite,
  },
  detailwrapperSpaceBlock: {
    marginTop: 8,
    flexDirection: "row",
  },
  productTypo: {
    color: Color.colorDarkgray,
    fontSize: 18,
    textAlign: "left",
  },
  searchbtnSpaceBlock: {
    padding: 8,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    flexDirection: "row",
  },
  productSpaceBlock: {
    marginLeft: 8,
    fontFamily: "Poppins-Regular",
  },
  bottomtabSpaceBlock: {
    paddingVertical: 8,
    paddingHorizontal: 16,
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
    padding: 8,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    flexDirection: "row",
    height: 40,
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
    padding: 16,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  suffixtext: {
    fontFamily: "Poppins-Regular",
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
    fontFamily: "Poppins-Regular",
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
    borderRadius: 50,
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    padding: 16,
    overflow: "hidden",
  },
  profilecard: {
    backgroundColor: Color.bgBrown,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: 16,
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
    fontSize: 18,
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
    fontSize: 18,
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
    fontSize: 18,
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
    paddingHorizontal: 16,
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
    fontFamily: "Poppins-Regular",
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  growtextbutton: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    backgroundColor: Color.colorPrimary,
    borderRadius: 15,
    paddingVertical: 8,
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
