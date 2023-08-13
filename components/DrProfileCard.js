import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

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
            <View style={[styles.suffixwrapper, styles.namewrapperFlexBox]}>
              <Text style={[styles.suffixtext, styles.greetingTypo]}>Dr.</Text>
            </View>
            <View style={[styles.namewrapper, styles.namewrapperFlexBox]}>
              <Text style={[styles.suffixtext, styles.greetingTypo]}>
                {nameText}
              </Text>
            </View>
          </View>
          <View style={[styles.greetingwrapper, styles.namewrapperFlexBox]}>
            <Text style={[styles.greeting, styles.greetingTypo]}>
              {greeting}
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.uploadimage, styles.namewrapperFlexBox]}>
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
  namewrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  greetingTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  suffixtext: {
    fontSize: FontSize.titleMedium_size,
    color: Color.colorWhite,
  },
  suffixwrapper: {
    flexDirection: "row",
  },
  namewrapper: {
    marginLeft: 4,
    flexDirection: "row",
  },
  profilenamewtrapper: {
    flexDirection: "row",
  },
  greeting: {
    fontSize: FontSize.bodyMedium_size,
    color: Color.colorDarkgray,
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
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorLightgray,
    width: 56,
    height: 56,
    overflow: "hidden",
    padding: Padding.p_base,
  },
  profilecard: {
    alignSelf: "stretch",
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
    padding: Padding.p_5xs,
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

export default DrProfileCard;
