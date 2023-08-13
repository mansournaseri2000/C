import React, { useMemo } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Pressable,
  ImageSourcePropType,
} from "react-native";
import { Padding, FontSize, FontFamily, Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TreatmentCard = ({
  caseProfileSrc,
  nameText = "Fullname",
  casePhone = "+98..............",
  caseCardMarginTop,
}) => {
  const caseCardStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", caseCardMarginTop),
    };
  }, [caseCardMarginTop]);

  return (
    <View style={[styles.casecard, styles.actionsFlexBox, caseCardStyle]}>
      <View style={styles.profilewrapper}>
        <ImageBackground
          style={styles.caseprofileIcon}
          resizeMode="contain"
          source={caseProfileSrc}
        />
      </View>
      <View style={styles.infowrapper}>
        <View style={[styles.namewrapper, styles.actionsFlexBox]}>
          <Text style={styles.nametext}>{nameText}</Text>
        </View>
        <View style={[styles.detailwrapper, styles.actionsFlexBox]}>
          <View style={styles.detailwrapper1}>
            <Text style={styles.caseorder}>{casePhone}</Text>
          </View>
          <View style={[styles.actions, styles.actionsFlexBox]}>
            <Pressable
              style={[styles.shrinktextbutton, styles.shrinktextbuttonFlexBox]}
            >
              <Text style={[styles.ghostbuttontext, styles.buttontextTypo]}>
                05
              </Text>
            </Pressable>
            <Pressable
              style={[styles.shrinktextbutton1, styles.shrinktextbuttonFlexBox]}
            >
              <Text style={[styles.buttontext, styles.buttontextTypo]}>
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  actionsFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  shrinktextbuttonFlexBox: {
    justifyContent: "center",
    height: 32,
    alignItems: "center",
    padding: Padding.p_5xs,
    flexDirection: "row",
  },
  buttontextTypo: {
    textAlign: "center",
    fontSize: FontSize.bodySmall_size,
    fontFamily: FontFamily.bodySmall,
  },
  caseprofileIcon: {
    width: 48,
    height: 48,
    borderRadius: Border.br_31xl,
  },
  profilewrapper: {
    flexDirection: "row",
  },
  nametext: {
    fontSize: FontSize.bodyMedium_size,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  namewrapper: {
    flexWrap: "wrap",
    alignSelf: "stretch",
    alignItems: "center",
  },
  caseorder: {
    color: Color.colorDarkgray,
    fontSize: FontSize.bodySmall_size,
    textAlign: "left",
    fontFamily: FontFamily.bodySmall,
  },
  detailwrapper1: {
    flex: 1,
  },
  ghostbuttontext: {
    color: Color.colorPrimary,
  },
  shrinktextbutton: {
    borderStyle: "solid",
    borderColor: "#241b18",
    borderWidth: 1,
    borderRadius: Border.br_31xl,
  },
  buttontext: {
    color: Color.gray,
  },
  shrinktextbutton1: {
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorPrimary,
    marginLeft: 8,
  },
  actions: {
    justifyContent: "flex-end",
    marginLeft: 4,
  },
  detailwrapper: {
    alignSelf: "stretch",
    alignItems: "center",
  },
  infowrapper: {
    marginLeft: 8,
    flex: 1,
  },
  casecard: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.bgBrown,
    padding: Padding.p_5xs,
    alignItems: "center",
    alignSelf: "stretch",
  },
});

export default TreatmentCard;
