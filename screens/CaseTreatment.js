import React, { useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StatusBar
} from "react-native";
import ImageContainer from "../components/ImageContainer";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent2 from "../components/FrameComponent2";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const CaseTreatment = () => {
  const [sliderFlatListData, setSliderFlatListData] = useState([
    <ImageContainer />,
    <FrameComponent />,
    <FrameComponent1 />,
    <FrameComponent2 />,
  ]);
  const navigation = useNavigation();

  return (
    <View style={styles.casetreatment}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={styles.maincontainer}>
          <View style={styles.header}>
            <Pressable
              style={[styles.growtextbutton, styles.growtextbuttonSpaceBlock]}
            >
              <Text style={styles.buttontext}>EN</Text>
            </Pressable>
            <View style={styles.header1}>
              <Text style={styles.headertext}>Treatment</Text>
            </View>
            <Image
              style={styles.headerChild}
              resizeMode="contain"
              source={require("../assets/group-15.png")}
            />
          </View>
          <View style={styles.prfilecontainer}>
            <View style={styles.profilecard}>
              <View style={styles.profileinfowrapper}>
                <View style={styles.profileinfowrapper1}>
                  <View style={styles.profilenamewtrapper}>
                    <View style={styles.namewrapper}>
                      <Text style={[styles.nametext, styles.dateTypo]}>
                        Fullname
                      </Text>
                    </View>
                  </View>
                  <View style={styles.addbtnFlexBox}>
                    <Text style={[styles.greeting, styles.greetingTypo]}>
                      Greeting
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.uploadimage}>
                <Image
                  style={styles.defaultimageIcon}
                  resizeMode="cover"
                  source={require("../assets/defaultimage2.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.prfilecontainer}>
            <View style={styles.maincontainer}>
              <View style={styles.titlewrapper}>
                <Image
                  style={[styles.calendarIcon, styles.iconLayout]}
                  resizeMode="contain"
                  source={require("../assets/calendar.png")}
                />
                <View style={styles.titletextwrapper}>
                  <Text
                    style={[styles.titletext, styles.dateTypo]}
                  >{` 14 more days on ALigner #1 `}</Text>
                </View>
              </View>
              <View style={styles.trackalignercontainer}>
                <View
                  style={[styles.counterwrapper, styles.counterwrapperBorder]}
                >
                  <View style={styles.titlewrapper}>
                    <Text style={[styles.titletext1, styles.greetingTypo]}>
                      Wearing
                    </Text>
                  </View>
                  <View style={styles.titlewrapper}>
                    <Text style={[styles.labeltext, styles.dateTypo]}>
                      ALIGNER
                    </Text>
                  </View>
                  <View style={styles.counternumber}>
                    <Text style={[styles.number, styles.dateTypo]}>1</Text>
                  </View>
                </View>
                <View style={styles.datewrapper}>
                  <View style={[styles.datacard, styles.datacardSpaceBlock]}>
                    <View style={styles.titlewrapper}>
                      <Text style={[styles.label, styles.dateTypo]}>
                        Start date
                      </Text>
                    </View>
                    <View style={styles.titlewrapper}>
                      <Text style={[styles.date, styles.dateTypo]}>
                        29/06/2023
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.datacard1, styles.datacardSpaceBlock]}>
                    <View style={styles.titlewrapper}>
                      <Text style={[styles.titletext, styles.dateTypo]}>
                        End date
                      </Text>
                    </View>
                    <View style={styles.titlewrapper}>
                      <Text style={[styles.date, styles.dateTypo]}>
                        29/06/2023
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.trackalignercontainer}>
                <Image
                  style={[styles.calendarIcon, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/flag.png")}
                />
                <View style={styles.titletextwrapper}>
                  <Text style={[styles.titletext, styles.dateTypo]}>
                    278 days to perfect smile1
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.slidersection}>
            <FlatList
              style={styles.slider}
              data={sliderFlatListData}
              renderItem={({ item }) => item}
              contentContainerStyle={styles.sliderFlatListContent}
            />
            <View style={[styles.addbtn, styles.addbtnFlexBox]}>
              <Image
                style={styles.plusCircleIcon}
                resizeMode="cover"
                source={require("../assets/pluscircle.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.prfilecontainer}>
          <TouchableOpacity
            style={[styles.growtextbutton1, styles.growtextbuttonSpaceBlock]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseProgress")}
          >
            <Text style={[styles.buttontext1, styles.buttontext1FlexBox]}>
              Finish Treatment
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.growtextbutton2, styles.counterwrapperBorder]}
            activeOpacity={0.2}
            onPress={() => navigation.navigate("CaseGuarantees")}
          >
            <Text style={[styles.ghostbuttontext, styles.buttontext1FlexBox]}>
              New Treatment
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomtab}>
        <Image
          style={styles.iconLayout}
          resizeMode="contain"
          source={require("../assets/messagewrapper.png")}
        />
        <Image
          style={[styles.calendarIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/youtube3.png")}
        />
        <Image
          style={[styles.calendarIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/info3.png")}
        />
        <Image
          style={[styles.calendarIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/condition2.png")}
        />
        <Image
          style={[styles.calendarIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/logout.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sliderFlatListContent: {
    flexDirection: "row",
  },
  growtextbuttonSpaceBlock: {
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_mini,
    justifyContent: "center",
    height: 40,
    flexDirection: "row",
  },
  dateTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  greetingTypo: {
    fontSize: FontSize.bodyMedium_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  iconLayout: {
    width: 32,
    height: 32,
  },
  counterwrapperBorder: {
    borderWidth: 1,
    borderColor: "#c5ab8e",
    borderStyle: "solid",
    alignItems: "center",
  },
  datacardSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: Padding.p_xs,
    width: 125,
    borderRadius: Border.br_xs,
    alignItems: "center",
  },
  addbtnFlexBox: {
    marginTop: 8,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  buttontext1FlexBox: {
    width: 304,
    display: "flex",
    textAlign: "center",
    fontFamily: FontFamily.bodySmall,
    justifyContent: "center",
    alignItems: "center",
  },
  buttontext: {
    textAlign: "center",
    color: Color.gray,
    fontFamily: FontFamily.bodySmall,
    fontSize: FontSize.titleMedium_size,
  },
  growtextbutton: {
    width: 40,
    justifyContent: "center",
    backgroundColor: Color.colorPrimary,
    alignItems: "center",
  },
  headertext: {
    fontWeight: "700",
    fontFamily: FontFamily.headingMediumBold,
    color: Color.colorWhite,
    fontSize: FontSize.headingMediumBold_size,
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
    padding: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nametext: {
    color: Color.colorWhite,
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
    justifyContent: "center",
    padding: Padding.p_base,
    alignItems: "center",
    overflow: "hidden",
  },
  profilecard: {
    padding: Padding.p_5xs,
    backgroundColor: Color.bgBrown,
    borderRadius: Border.br_xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  prfilecontainer: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  calendarIcon: {
    overflow: "hidden",
  },
  titletext: {
    color: Color.colorPrimary,
    fontSize: FontSize.titleLarge_size,
  },
  titletextwrapper: {
    marginLeft: 9,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  titlewrapper: {
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  titletext1: {
    color: Color.colorPrimary,
  },
  labeltext: {
    color: Color.colorPrimary,
    fontSize: FontSize.headingMediumBold_size,
  },
  number: {
    fontSize: FontSize.displayLarge_size,
    color: Color.colorPrimary,
  },
  counternumber: {
    justifyContent: "center",
    alignSelf: "stretch",
    alignItems: "center",
  },
  counterwrapper: {
    borderRadius: Border.br_xs,
    padding: Padding.p_base,
  },
  label: {
    fontSize: FontSize.titleLarge_size,
    color: Color.gray,
  },
  date: {
    color: Color.colorLightgray,
    fontSize: FontSize.titleMedium_size,
  },
  datacard: {
    backgroundColor: Color.colorPrimary,
  },
  datacard1: {
    backgroundColor: Color.bgBrown,
  },
  datewrapper: {
    marginLeft: 32,
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  trackalignercontainer: {
    marginTop: 32,
    justifyContent: "center",
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  maincontainer: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  slider: {
    width: 656,
    maxWidth: 656,
    overflow: "hidden",
    flex: 1,
  },
  plusCircleIcon: {
    width: 48,
    height: 48,
    overflow: "hidden",
  },
  addbtn: {
    alignSelf: "stretch",
  },
  slidersection: {
    width: 390,
    padding: Padding.p_base,
    overflow: "hidden",
  },
  buttontext1: {
    height: 28,
    color: Color.gray,
    fontSize: FontSize.titleMedium_size,
  },
  growtextbutton1: {
    justifyContent: "center",
    backgroundColor: Color.colorPrimary,
    alignSelf: "stretch",
    alignItems: "center",
  },
  ghostbuttontext: {
    color: Color.colorPrimary,
    fontSize: FontSize.titleLarge_size,
    alignSelf: "stretch",
  },
  growtextbutton2: {
    marginTop: 10,
    justifyContent: "center",
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    borderRadius: Border.br_mini,
    height: 40,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  container: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  bottomtab: {
    borderColor: "#000",
    borderTopWidth: 5,
    borderStyle: "solid",
    backgroundColor: Color.bgBrown,
    paddingVertical: Padding.p_5xs,
    paddingHorizontal: Padding.p_base,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  casetreatment: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 938,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default CaseTreatment;
