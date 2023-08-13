import * as React from "react";
import { Pressable, Image, StyleSheet, Text, View, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, Padding, FontSize, FontFamily } from "../GlobalStyles";

const FAQs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.faqs}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={[styles.header, styles.headerFlexBox]}>
          <Pressable
            style={[styles.iconbutton, styles.header1FlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.arrowLeftIcon}
              resizeMode="cover"
              source={require("../assets/arrowleft.png")}
            />
          </Pressable>
          <View style={[styles.header1, styles.header1FlexBox]}>
            <Text style={styles.headertext}>FAQs</Text>
          </View>
          <Image
            style={styles.jplignlogoIcon}
            resizeMode="contain"
            source={require("../assets/group-14.png")}
          />
        </View>
      </View>
      <View style={[styles.bottomtab, styles.headerFlexBox]}>
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
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
  },
  header1FlexBox: {
    justifyContent: "center",
    flexDirection: "row",
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
  },
  jplignlogoIcon: {
    width: 50,
    height: 40,
  },
  header: {
    padding: Padding.p_base,
    alignItems: "center",
    flexDirection: "row",
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
  },
  faqs: {
    backgroundColor: Color.bgBlack,
    flex: 1,
    width: "100%",
    height: 898,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
  },
});

export default FAQs;
