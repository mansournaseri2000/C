import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View,StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Conditions = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.conditions}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={[styles.header, styles.headerFlexBox]}>
          <Pressable
            style={[styles.iconbutton, styles.q1FlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.arrowLeftIcon}
              resizeMode="contain"
              source={require("../assets/arrowleft.png")}
            />
          </Pressable>
          <View style={[styles.header1, styles.q1FlexBox]}>
            <Text style={styles.headertext}>Conditions</Text>
          </View>
          <Image
            style={styles.jplignlogoIcon}
            resizeMode="contain"
            source={require("../assets/group-14.png")}
          />
        </View>
        <View style={styles.headerFlexBox}>
          <View style={[styles.q1, styles.q1FlexBox]}>
            <Text style={styles.scopeTheseGeneral}>{`Scope
These General Terms and Conditions apply to all orders made through our online shop and are only intended for consumers.
Consumer means any natural person who enters into a legal transaction for purposes that cannot be predominantly attributed to their commercial or self-employed professional activity. An entrepreneur means a natural or legal person or a legally capable partnership that acts in the course of a legal transaction in the exercise of their commercial or self-employed professional activity.
Contractual partner, conclusion of contract, correction options
The purchase contract is concluded with Healthy Teeth Operations GmbH.
The presentation of products in the online shop does not constitute a legally binding offer, bu`}</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottomtab}>
        <Image
          style={styles.iconLayout}
          resizeMode="contain"
          source={require("../assets/messagewrapper.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/youtube.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/info.png")}
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
  headerFlexBox: {
    padding: Padding.p_base,
    alignSelf: "stretch",
    alignItems: "center",
  },
  q1FlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout: {
    height: 32,
    width: 32,
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconbutton: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorPrimary,
    width: 40,
    padding: Padding.p_5xs,
    height: 40,
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
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    flexDirection: "row",
  },
  jplignlogoIcon: {
    width: 50,
    height: 40,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  scopeTheseGeneral: {
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodySmall,
    color: Color.colorDarkgray,
    textAlign: "left",
    alignSelf: "stretch",
  },
  q1: {
    alignSelf: "stretch",
  },
  container: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  youtubeIcon: {
    overflow: "hidden",
  },
  bottomtab: {
    backgroundColor: Color.bgBrown,
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 5,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  conditions: {
    backgroundColor: Color.bgBlack,
    flex: 1,
    width: "100%",
    height: 898,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default Conditions;
