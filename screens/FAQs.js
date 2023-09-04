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
              source={require("../assets/icons/arrow-left.png")}
            />
          </Pressable>
          <View style={[styles.header1, styles.header1FlexBox]}>
            <Text style={styles.headertext}>FAQs</Text>
          </View>
          <Image
            style={styles.jplignlogoIcon}
            resizeMode="contain"
            source={require("../assets/JplignLogo.png")}
          />
        </View>
      </View>
      <View style={[styles.bottomtab, styles.headerFlexBox]}>
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
    borderRadius: 15,
    backgroundColor: Color.colorPrimary,
    width: 40,
    padding: 8,
    height: 40,
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
  },
  jplignlogoIcon: {
    width: 50,
    height: 40,
  },
  header: {
    padding: 16,
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
    paddingHorizontal: 16,
    paddingVertical: 8,
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
