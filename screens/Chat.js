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
import { Padding, Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const Chat = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.chat}>
              <StatusBar backgroundColor={Color.bgBlack} />

      <View style={styles.container}>
        <View style={[styles.header, styles.rowFlexBox]}>
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
            <Text style={styles.headertext}>Chat</Text>
          </View>
          <Image
            style={styles.jplignlogoIcon}
            resizeMode="contain"
            source={require("../assets/group-14.png")}
          />
        </View>
      </View>
      <View style={styles.conversationcontainer}>
        <View style={styles.conversationwrapper}>
          <View style={[styles.chat1, styles.chat1SpaceBlock]}>
            <View style={[styles.messagewrapper, styles.messagewrapperLayout]}>
              <Text style={styles.message}>Message of Support</Text>
            </View>
          </View>
          <View style={[styles.chat2, styles.chatSpaceBlock]}>
            <View style={[styles.messagewrapper1, styles.messagewrapperLayout]}>
              <Text style={styles.message}>Message of User</Text>
            </View>
          </View>
          <View style={[styles.chat2, styles.chatSpaceBlock]}>
            <View style={[styles.messagewrapper1, styles.messagewrapperLayout]}>
              <Text style={styles.message}>Message of User</Text>
            </View>
          </View>
          <View style={styles.chatSpaceBlock}>
            <View style={[styles.messagewrapper, styles.messagewrapperLayout]}>
              <Text style={styles.message}>Message of Support</Text>
            </View>
          </View>
          <View style={styles.chatSpaceBlock}>
            <View style={[styles.messagewrapper, styles.messagewrapperLayout]}>
              <Text style={styles.message}>Message of Support</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.messagecontainer, styles.messageboxSpaceBlock]}>
        <View style={[styles.row, styles.rowSpaceBlock]}>
          <View style={[styles.messageboxwrapper, styles.iconbuttonFlexBox]}>
            <Image
              style={styles.arrowLeftIcon}
              resizeMode="contain"
              source={require("../assets/paperclip2.png")}
            />
            <TextInput
              style={[styles.messagebox, styles.messageboxSpaceBlock]}
              placeholder="Type your message..."
              placeholderTextColor="#241b18"
            />
          </View>
          <Image
            style={styles.sendbtnIcon}
            resizeMode="contain"
            source={require("../assets/group-34808.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowFlexBox: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  iconbuttonFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  chat1SpaceBlock: {
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
  },
  messagewrapperLayout: {
    maxWidth: 296,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  chatSpaceBlock: {
    marginTop: 8,
    paddingHorizontal: Padding.p_5xs,
    flexWrap: "wrap",
    paddingVertical: 0,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  messageboxSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    alignItems: "center",
  },
  rowSpaceBlock: {
    padding: Padding.p_5xs,
    borderRadius: Border.br_mini,
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconbutton: {
    width: 40,
    padding: Padding.p_5xs,
    borderRadius: Border.br_mini,
    height: 40,
    backgroundColor: Color.colorPrimary,
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
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  jplignlogoIcon: {
    width: 50,
    height: 40,
  },
  header: {
    padding: Padding.p_base,
    justifyContent: "space-between",
  },
  container: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  message: {
    fontSize: FontSize.bodyMedium_size,
    fontFamily: FontFamily.bodySmall,
    color: Color.gray,
    textAlign: "left",
    flex: 1,
  },
  messagewrapper: {
    borderBottomRightRadius: Border.br_xs,
    backgroundColor: Color.colorPrimary,
  },
  chat1: {
    flexWrap: "wrap",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  messagewrapper1: {
    borderBottomLeftRadius: Border.br_xs,
    backgroundColor: Color.colorLightgray,
  },
  chat2: {
    justifyContent: "flex-end",
  },
  conversationwrapper: {
    alignSelf: "stretch",
  },
  conversationcontainer: {
    padding: Padding.p_3xs,
    alignSelf: "stretch",
    flex: 1,
  },
  messagebox: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorDarkgray,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    fontSize: 13,
    marginLeft: 8,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: "row",
    flex: 1,
  },
  messageboxwrapper: {
    flex: 1,
  },
  sendbtnIcon: {
    width: 22,
    height: 22,
    marginLeft: 8,
  },
  row: {
    flexDirection: "row",
    alignSelf: "stretch",
    alignItems: "center",
  },
  messagecontainer: {
    backgroundColor: Color.bgBrown,
    paddingHorizontal: Padding.p_base,
    alignSelf: "stretch",
  },
  chat: {
    backgroundColor: Color.bgBlack,
    width: "100%",
    height: 898,
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "hidden",
    flex: 1,
  },
});

export default Chat;
