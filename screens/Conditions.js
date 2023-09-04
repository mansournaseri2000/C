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
              source={require("../assets/icons/arrow-left.png")}
            />
          </Pressable>
          <View style={[styles.header1, styles.q1FlexBox]}>
            <Text style={styles.headertext}>Conditions</Text>
          </View>
          <Image
            style={styles.jplignlogoIcon}
            resizeMode="contain"
            source={require("../assets/JplignLogo.png")}
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
  headerFlexBox: {
    padding: 16,
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
    borderRadius: 15,
    backgroundColor: Color.colorPrimary,
    width: 40,
    padding: 8,
    height: 40,
    flexDirection: "row",
  },
  headertext: {
    fontSize: 24,
    fontWeight: "700",
    fontFamily: "Poppins-Bold",
    color: Color.colorWhite,
    textAlign: "center",
  },
  header1: {
    paddingHorizontal: 10,
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
    fontSize: 18,
    fontFamily: "Poppins-Regular",
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
    paddingHorizontal: 16,
    paddingVertical: 8,
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
