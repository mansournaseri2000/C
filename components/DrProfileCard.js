import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
} from "react-native";
import { Color } from "../GlobalStyles";

const DrProfileCard = ({
  imageSrc,
  nameText = "Fullname",
  greeting = "Greeting",
}) => {
  return (
    <View style={styles.profilecard}>
      <View>
        <View>
          <View style={styles.profilenamewtrapper}>
            <View style={styles.suffixwrapper}>
              <Text style={[styles.suffixtext, styles.greetingTypo]}>Dr.</Text>
            </View>
            <View style={styles.namewrapper}>
              <Text style={[styles.suffixtext, styles.greetingTypo]}>
                {nameText}
              </Text>
            </View>
          </View>
          <View style={styles.greetingwrapper}>
            <Text style={[styles.greeting, styles.greetingTypo]}>
              {greeting}
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.uploadimage}>
        <Image
          style={styles.defaultimageIcon}
          resizeMode="contain"
          source={imageSrc}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  suffixtext: {
    fontSize: 18,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
  },
  suffixwrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  namewrapper: {
    marginLeft: 4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profilenamewtrapper: {
    flexDirection: "row",
  },
  greeting: {
    fontSize: 18,
    color: Color.colorDarkgray,
    textAlign: "left",
    fontFamily: "Poppins-Regular",
  },
  greetingwrapper: {
    marginTop: 8,
    flexDirection: "row",
  },
  defaultimageIcon: {
    width: 20,
    height: 32,
  },
  uploadimage: {
    borderRadius: 50,
    backgroundColor: Color.colorLightgray,
    width: 64,
    height: 64,
    overflow: "hidden",
    alignSelf: "center",
    // padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  profilecard: {
    alignSelf: "stretch",
    borderRadius: 12,
    backgroundColor: Color.bgBrown,
    padding: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default DrProfileCard;
