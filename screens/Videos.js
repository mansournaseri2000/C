import * as React from "react";
import {
  View,
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Text,
  StatusBar
} from "react-native";
import Video from "react-native-video";
import { useNavigation } from "@react-navigation/native";
import { Padding, Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const Videos = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.videos}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.containerScrollViewContent}
      >
        <View style={[styles.header, styles.headerSpaceBlock]}>
          <Pressable
            style={[styles.iconbutton, styles.header1FlexBox]}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.arrowLeftIcon}
              resizeMode="contain"
              source={require("../assets/icons/arrow-left.png")}
            />
          </Pressable>
          <View style={[styles.header1, styles.header1FlexBox]}>
            <Text style={styles.headertext}>Videos</Text>
          </View>
          <Image
            style={styles.jplignlogoIcon}
            resizeMode="contain"
            source={require("../assets/JplignLogo.png")}
          />
        </View>
        <ScrollView
          style={[styles.videocontainer, styles.headerSpaceBlock]}
          showsVerticalScrollIndicator={true}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={styles.videoContainerScrollViewContent}
        >
          <View style={[styles.youtuebvideo, styles.bottomtabBg]}>
            <View style={styles.inputgroup}>
              <View style={[styles.iconbutton, styles.header1FlexBox]}>
                <Image
                  style={styles.arrowLeftIcon}
                  resizeMode="cover"
                  source={require("../assets/icons/film.png")}
                />
              </View>
              <View style={styles.videoinfowrapper}>
                <Text style={[styles.label, styles.labelFlexBox]}>Video</Text>
                <Text style={[styles.label1, styles.labelFlexBox]}>
                  Video Topic
                </Text>
              </View>
            </View>
            <View style={styles.videowrapper}>
              <Video
                style={styles.video}
                volume={1}
                controls={true}
                source={{ uri: "undefined" }}
                resizeMode="contain"
              />
            </View>
          </View>
        </ScrollView>
      </ScrollView>
      <View style={[styles.bottomtab, styles.bottomtabBg]}>
        <Image
          style={styles.iconLayout}
          resizeMode="contain"
          source={require("../assets/icons/message-circle.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="cover"
          source={require("../assets/icons/youtube.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="contain"
          source={require("../assets/icons/info.png")}
        />
        <Image
          style={[styles.youtubeIcon, styles.iconLayout]}
          resizeMode="cover"
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
  videoContainerScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  containerScrollViewContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerSpaceBlock: {
    padding: 16,
    alignSelf: "stretch",
  },
  header1FlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  bottomtabBg: {
    backgroundColor: Color.bgBrown,
    alignSelf: "stretch",
  },
  labelFlexBox: {
    textAlign: "left",
    fontFamily: "Poppins-Regular",
    alignSelf: "stretch",
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {
    fontSize: 18,
    color: Color.colorPrimary,
  },
  label1: {
    fontSize: 18,
    color: Color.colorDarkgray,
  },
  videoinfowrapper: {
    marginLeft: 8,
    flex: 1,
  },
  inputgroup: {
    borderRadius: 12,
    padding: 8,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  video: {
    height: "100%",
    width: "100%",
  },
  videowrapper: {
    padding: 8,
    alignSelf: "stretch",
    alignItems: "center",
  },
  youtuebvideo: {
    borderRadius: 12,
  },
  videocontainer: {
    flex: 1,
  },
  container: {
    alignSelf: "stretch",
    flex: 1,
  },
  youtubeIcon: {
    overflow: "hidden",
  },
  bottomtab: {
    borderStyle: "solid",
    borderColor: "#000",
    borderTopWidth: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  videos: {
    backgroundColor: Color.bgBlack,
    height: 898,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    width: "100%",
    flex: 1,
  },
});

export default Videos;
