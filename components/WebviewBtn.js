import * as React from "react";
import { useState } from "react";
import { Text, StyleSheet, TouchableOpacity,Button,Pressable  } from "react-native";
import { WebView } from 'react-native-webview';
import Modal from 'react-native-modal';
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const WebviewBtn = ({ ghostButtonText = "ButtonText" }) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    // <>
    <TouchableOpacity
      style={[styles.growtextbutton, styles.growtextbuttonFlexBox]}
      activeOpacity={0.8}
      onPress={toggleModal}
    >
      <Text style={[styles.ghostbuttontext, styles.growtextbuttonFlexBox]}>
        {ghostButtonText}
      </Text>
      <Modal isVisible={isModalVisible} style={styles.modal}>
        <WebView source={{ uri: 'https://3dsimulation.info/?u=23891&a=Client3048/Client3806/JK26621/DED505D825CA46D99C439B02624AB088.iiwgl&fg=ddd&bg=000&p=NQUVAL' }} />
        <Pressable onPress={toggleModal} style={styles.closewrapper}>
          <Text style={styles.closetext}>Close</Text>
        </Pressable>
      </Modal>
    </TouchableOpacity>
 
  );
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    margin: 0,
  },
  closewrapper:{
    backgroundColor: Color.colorPrimary,
    padding:8
  },
  closetext:{
    color: Color.colorWhite,
    textAlign:'center'
  },
  growtextbuttonFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
  },
  ghostbuttontext: {
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    color: Color.colorPrimary,
    textAlign: "center",
    display: "flex",
  },
  growtextbutton: {
    borderRadius: 15,
    borderStyle: "solid",
    borderColor: Color.colorPrimary,
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default WebviewBtn;
