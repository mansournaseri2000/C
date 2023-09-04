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
              source={require("../assets/icons/arrow-left.png")}
            />
          </Pressable>
          <View style={styles.header1}>
            <Text style={styles.headertext}>Chat</Text>
          </View>
          <Image
            style={styles.jplignlogoIcon}
            resizeMode="contain"
            source={require("../assets/JplignLogo.png")}
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
              source={require("../assets/icons/paperclip.png")}
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
            source={require("../assets/icons/send-white.png")}
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
    paddingHorizontal: 8,
    flexDirection: "row",
  },
  messagewrapperLayout: {
    maxWidth: 296,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    padding: 8,
    flexDirection: "row",
  },
  chatSpaceBlock: {
    marginTop: 8,
    paddingHorizontal: 8,
    flexWrap: "wrap",
    paddingVertical: 0,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  messageboxSpaceBlock: {
    paddingVertical: 4,
    alignItems: "center",
  },
  rowSpaceBlock: {
    padding: 8,
    borderRadius: 15,
  },
  arrowLeftIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  iconbutton: {
    width: 40,
    padding: 8,
    borderRadius: 15,
    height: 40,
    backgroundColor: Color.colorPrimary,
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
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  jplignlogoIcon: {
    width: 50,
    height: 40,
  },
  header: {
    padding: 16,
    justifyContent: "space-between",
  },
  container: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  message: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    color: Color.gray,
    textAlign: "left",
    flex: 1,
  },
  messagewrapper: {
    borderBottomRightRadius: 12,
    backgroundColor: Color.colorPrimary,
  },
  chat1: {
    flexWrap: "wrap",
    paddingHorizontal: 8,
    paddingVertical: 0,
    alignSelf: "stretch",
  },
  messagewrapper1: {
    borderBottomLeftRadius: 12,
    backgroundColor: Color.colorLightgray,
  },
  chat2: {
    justifyContent: "flex-end",
  },
  conversationwrapper: {
    alignSelf: "stretch",
  },
  conversationcontainer: {
    padding: 10,
    alignSelf: "stretch",
    flex: 1,
  },
  messagebox: {
    borderRadius: 5,
    backgroundColor: Color.colorDarkgray,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    fontSize: 13,
    marginLeft: 8,
    paddingHorizontal: 8,
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
    paddingHorizontal: 16,
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
